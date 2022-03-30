const Product = require("../models/product");

exports.getProducts = async (req, res) => {
  try {
    await Product.find({}).then((products) => {
      res.json({ products });
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
    await Product.findOneAndDelete({ id: req.params.id });
    res.send("product deleted !");
  } catch (err) {
    res.send(err);
  }
};

exports.updateProduct = async (req, res) => {
  try {
    await Product.findOneAndUpdate(
      { id: req.params.id },
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

exports.filterProducts = (req, res) => {
  const products = Product.find()
    .where("price" > 3000)
    .select("_id title description price created")
    .then((products) => {
      res.json({ products });
    })
    .catch((err) => console.log(err));
};
