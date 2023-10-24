const path = require("path");
const rootDir = require("../util/path");

exports.contactPage = (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "contact.html"));
};

exports.successfulBooking = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  res.send(
    `<h1>Booking Successful for <em>Mr. ${name}</em> <br>Confirmation sent on your email - <em>${email}</em></h1>`
  );
};
