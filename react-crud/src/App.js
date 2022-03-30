import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table, Navbar, Container, Button } from "react-bootstrap";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.2:8080/products")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="container-fluid pl-5 pr-5 ">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <Navbar.Brand></Navbar.Brand>
        </Container>
      </Navbar>
      <div className="row">
        <div>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Title</th>
                <th>Description</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.products?.map((p) => (
                <tr>
                  <td>{p._id}</td>
                  <td>{p.title}</td>
                  <td>{p.description}</td>
                  <td>{p.price}</td>
                  <td>
                    <Button variant="primary">Edit</Button>{" "}
                    <Button variant="danger">Delete</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}

export default App;
