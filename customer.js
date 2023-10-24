const express = require("express");
const path = require("path");
const rootDir = require("../util/path");

const productController = require("../controllers/contact");
const successBooking = require("../controllers/contact");

const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();

router.get("/contactus", productController.contactPage);

router.post("/success", successBooking.successfulBooking);

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
