const path = require("path");

const sequelize = require("./util/databaseSequelize");
const bodyParser = require("body-parser");
const express = require("express");

// const errorController = require("./controllers/error");
const userRoutes = require("./routes/user");

const app = express();
const Patient = require("./models/patient");

var cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

app.use(userRoutes);
app.use(express.json());

// app.use(errorController.get404);

app.post("/new-booking", async (req, res, next) => {
  try {
    if (!req.body.phone) {
      throw new Error("Phone number is mandatory");
    }

    const patientName = req.body.name;
    const patientEmail = req.body.email;
    const patientContact = req.body.phone;

    const patientData = await Patient.create({
      name: patientName,
      email: patientEmail,
      phone: patientContact,
    });
    res.status(201).json({ newPatient: patientData });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});

sequelize
  .sync()
  .then((result) => {
    app.listen(3000);
  })
  .catch((err) => console.log(err));
