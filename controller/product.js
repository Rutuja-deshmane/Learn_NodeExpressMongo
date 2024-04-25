const fs = require("fs");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
const products = data.products;

exports.createProduct = (req, res) => {
  const product = products.push(req.body);
  res.json(req.body);
};

exports.getAllProducts = (req, res) => {
  res.json(products);
};

exports.getProduct = (req, res) => {
  const product = products.find((product) => product.id === +req.params.id);
  res.json(product);
};

exports.replaceProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === +id);
  products.splice(productIndex, 1, { ...req.body, id: id });
  res.status(201).json(req.body);
};

exports.updateProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === +id);
  const product = products[productIndex];
  products.splice(productIndex, 1, { ...product, ...req.body });
  res.status(201).json(req.body);
};
exports.deleteProduct = (req, res) => {
  const id = +req.params.id;
  const productIndex = products.findIndex((product) => product.id === +id);
  products.splice(productIndex, 1);
  res.status(201).json(product);
};
