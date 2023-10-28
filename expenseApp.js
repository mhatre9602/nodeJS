const sequelize = require("./utils/databaseConfig");

// const bodyParser = require("body-parser");

const express = require("express");

const expRoutes = require("./routes/expenseRoutes");

const app = express();
const Expense = require("./models/expenseModel");

// app.use(bodyParser.urlencoded({ extended: true }));

var cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(expRoutes);
app.use(express.json());

app.post("/newExpense", async (req, res, next) => {
  console.log(req.body);
  try {
    const expAmount = req.body.amount;
    const expDesc = req.body.description;
    const expCat = req.body.category;

    const expenseData = await Expense.create({
      amount: expAmount,
      description: expDesc,
      category: expCat,
    });
    res.status(201).json({ newExpense: "Data recieved" });
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
