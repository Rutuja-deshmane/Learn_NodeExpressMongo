const fs = require("fs");
const express = require("express");
const morgan = require("morgan");
const server = express();

const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const products = data.products;

//Built-in middleware
//express.json parses incoming requests with JSON payloads
// mostly its used for post request to get the data from the body
server.use(express.json());

//create API
// product DB used that stored in data.json

// create product

server.post("/products", (req, res) => {
  const product = products.push(req.body);
  res.json(req.body);
});

//Read products
server.get("/products", (req, res) => {
  res.json(products);
});

//get product by id
server.get("/product/:id", (req, res) => {
  const product = products.find((product) => product.id === +req.params.id);

  res.json(product);
});

//get product by title
server.get("/product/title/:title", (req, res) => {
  const product = products.find(
    (product) => product.title === req.params.title
  );
  res.json(product);
});

//update product
server.put("/products/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === +id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
});

//update product using patch
//patch update particular field
server.patch("/product/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === +id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
});

server.delete("/product/:id", (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === +id);
  products.splice(productIndex, 1);
  res.status(201).json(productIndex);
});

server.listen(8080, () => {
  console.log("server is running");
});
