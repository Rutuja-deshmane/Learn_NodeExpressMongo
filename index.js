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

//Third-party middleware
//morgan is a HTTP request logger middleware for node.js
//server.use(morgan("default"));

server.use(morgan("tiny"));

//static middlewaare for serving static files
//express.static serves static assets such as HTML files, images, and so on.
server.use(express.static("public"));

//express.urlencoded parses incoming requests with URL-encoded payloads.
//server.use(express.urlencoded({ extended: true }));

//custom middleware
//like this Api mostlly used for Logger
/*server.use((req, res, next) => {
  console.log(req.method, req.hostname, new Date(), req.get("Sec-Fetch-Dest"));
  next();
});*/

// middelware for Authentication
const auth = (req, res, next) => {
  console.log(req.query);
  if (req.query.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

// middelware for Authentication get the data from the body
const auth_b = (req, res, next) => {
  if (req.body.password == "123") {
    next();
  } else {
    res.sendStatus(401);
  }
};

//server.use(auth);

//create API

//params is use for access particular data or id
server.get("/product/:id", (req, res) => {
  console.log(req.params);
  res.json({ type: "GET" });
});

server.get("/", auth, (req, res) => {
  res.json({ type: "GET" });
});

server.post("/", auth_b, (req, res) => {
  res.json({ type: "POST" });
});

server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});

server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});

server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.get("/try", (req, res) => {
  //res.sendStatus(404);
  //res.json(products);
  //res.send("<h1>hello<h1>");
  //res.sendFile("/Learn_NodeExpressMongo/index.html");
});

server.listen(8080, () => {
  console.log("server is running");
});
