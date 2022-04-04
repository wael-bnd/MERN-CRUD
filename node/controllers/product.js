const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    await Product.find({})
      .select("_id title description price ")
      .then((products) => {
        res.json(products);
      });
  } catch (err) {
    console.log(err);
  }
};

exports.createProduct = async (req, res) => {
  try {
    let product = new Product({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
    });
    await product.save();
    res.send("saved !");
  } catch (err) {
    console.log(err);
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id });
    res.send("product deleted !");
  } catch (err) {
    res.send(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.findOneAndUpdate(
      { _id: req.params.id },
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
      }
    );
    res.send("product updated !");
  } catch (err) {
    res.send(err);
  }
};

exports.searchProducts = async (req, res) => {
  try {
    await Product.find({ title: { $regex: ".*" + req.params.title + ".*" } })
      .select("_id title description price ")
      .then((products) => {
        res.json(products);
      });
  } catch (err) {
    console.log(err);
  }
};

exports.filterProducts = async (req, res) => {
  try {
    await Product.find({
      price: { $gte: req.params.min, $lte: req.params.max },
    })
      .select("_id title description price ")
      .then((products) => {
        res.json(products);
      });
  } catch (err) {
    console.log(err);
  }
};
exports.maxPrice = async (req, res) => {
  try {
    await Product.find()
      .sort({ price: -1 })
      .limit(1)
      .then((product) => {
        res.json(product);
      });
  } catch (err) {
    console.log(err);
  }
};
exports.minPrice = async (req, res) => {
  try {
    await Product.find()
      .sort({ price: 1 })
      .limit(1)
      .then((product) => {
        res.json(product);
      });
  } catch (err) {
    console.log(err);
  }
};
