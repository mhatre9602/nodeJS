const { json } = require("body-parser");
const fs = require("fs");
const path = require("path");

const pathWrite = path.join(
  path.dirname(require.main.filename),
  "data",
  "products.json"
);
const getProductsFromFile = (cb) => {
  fs.readFile(pathWrite, (err, fileData) => {
    if (err) {
      cb([]);
    } else {
      cb(JSON.parse(fileData));
    }
  });
};

module.exports = class Products {
  constructor(t) {
    this.title = t;
  }

  save() {
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(pathWrite, JSON.stringify(products), (err) => {
        console.log(err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }
};
