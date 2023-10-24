const path = require("path");
const rootDir = require("../util/path");

exports.addProduct = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "addProduct.html"));
};
