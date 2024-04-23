//console.log("hello");

const fs = require("fs");
/*
// use of fs.readFileSync
const txt = fs.readFileSync("demo.txt", "utf-8");
console.log(txt);*/

// use of fs.readFile
//it helps to read file asynchronously
const txt = fs.readFile("demo.txt", "utf-8", (err, txt) => {
  console.log(txt);
});

//common js modules
const lib = require("./lib.js");
console.log("Add:-" + lib.sum(4, 6), "\nSub:-" + lib.sub(10, 5));

/*
//import Methods for ES modules
//  for this we need to add type="module" in script tag(package.json)
import { sub, sum } from "./lib.js";
console.log("Add:-" + sum(4, 6), "\nSub:-" + sub(10, 5));*/
