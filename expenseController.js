const Expense = require("../models/expenseModel");

exports.getExpenses = async (req, res, next) => {
  try {
    const expenseData = await Expense.findAll();
    res.status(201).json(expenseData);
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
};

exports.deleteExpense = async (req, res, next) => {
  const expID = req.params.expenseID;
  console.log(expID);
  if (!expID) {
    res.json({ message: "No such expense found to be deleted" });
  } else {
    const count = await Expense.destroy({ where: { id: expID } });
    res.json({ message: "Expense Deleted" });
  }
};

exports.createNewExpense = async (req, res, next) => {
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
};
