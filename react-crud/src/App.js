import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Table,
  Navbar,
  Container,
  Button,
  Form,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function App() {
  const [data, setData] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.2:8080/products")
      .then((response) => setData(response.data));
  }, []);
  const postData = () => {
    axios.post(`http://127.0.0.2:8080/add`, {
      title,
      description,
      price,
    });
  };
  const deleteData = (id) => {
    axios.delete(`http://127.0.0.2:8080/delete/${id}`);
    window.location.reload(false);
  };
  return (
    <div className="container-fluid pl-5 pr-5 ">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand></Navbar.Brand>
        </Container>
      </Navbar>
      <div>
        <Row>
          <Col>
            <h1>Add new product</h1>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  placeholder="Enter title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  placeholder="Enter description"
                  onChange={(e) => setDescription(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control
                  placeholder="Enter price"
                  onChange={(e) => setPrice(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={postData} type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col>
            <Form>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Min
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="2233"
                  />
                </Col>
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Max
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="8922"
                  />
                </Col>

                <Col xs="auto">
                  <Button type="submit" className="mb-2">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
            <div>
              <Slider />
            </div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Description</th>
                  <th>Price</th>
                  <th>Date</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {data.products?.map((p) => (
                  <tr>
                    <td>{p.title}</td>
                    <td>{p.description}</td>
                    <td>{p.price}</td>
                    <td>{p.created}</td>
                    <td>
                      <Button variant="primary">Edit</Button>{" "}
                      <Button
                        variant="danger"
                        onClick={() => deleteData(p._id)}
                      >
                        Delete
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default App;
