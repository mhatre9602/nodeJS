// const path = require("path");

const express = require("express");

const patientController = require("../controllers/patient");

const router = express.Router();

router.delete("/delete-booking/:bookingID", patientController.deleteBooking);

// router.post("/new-booking", patientController.createBooking);

router.get("/get-booking", patientController.getBookings);

// router.get("/booking/:bookingId", patientController.getBooking);

module.exports = router;
