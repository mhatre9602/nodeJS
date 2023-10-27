const Patient = require("../models/patient");

exports.getBookings = async (req, res, next) => {
  try {
    const patientData = await Patient.findAll();
    res.status(201).json(patientData);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.deleteBooking = async (req, res, next) => {
  const userId = req.params.bookingID;
  if (!userId) {
    res.json({ message: "No such element found to be deleted" });
  } else {
    const count = await Patient.destroy({ where: { id: userId } });
    res.json({ message: "Booking cancelled" });
  }
};

exports.createBooking = async (req, res, next) => {
  console.log(req.body);
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
};
