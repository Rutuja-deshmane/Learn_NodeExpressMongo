const express = require("express");
//const morgan = require("morgan");
const server = express();
const productRouter = require("./routes/product");
const userRouter = require("./routes/user");

// middlewares

server.use(express.json());
server.use("/products", productRouter.router);
server.use("/users", userRouter.router);

server.listen(8080, () => {
  console.log("server started");
});
