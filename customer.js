const express = require("express");
const path = require("path");
const rootDir = require("../util/path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const router = express.Router();
router.get("/contactus", (req, res) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

router.post("/success", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(
    `<h1>Booking Successful for <em>Mr. ${name}</em> <br>Confirmation sent on your email - <em>${email}</em></h1>`
  );
});

router.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;
