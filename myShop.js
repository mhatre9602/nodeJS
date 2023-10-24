//express
const express = require("express");
const bodyParser = require("body-parser");

const path = require("path");

const adminRoutes = require("./routes/admin");
const customerRoutes = require("./routes/customer");
// const rootDir = require("./util/path");

const pageNotFound = require("./controllers/404Controller");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "static")));
app.use("/admin", adminRoutes);
app.use("/shop", customerRoutes);

app.use(pageNotFound.pageNotFound);
app.listen(3000);
