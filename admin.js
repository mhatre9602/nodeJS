const express = require("express");

const router = express.Router();
const addProductController = require("../controllers/addProductController");
router.get("/add-product", addProductController.addProduct);

router.post("/product", (req, res, next) => {
  console.log(req.body);
  res.redirect("/");
});

module.exports = router;
