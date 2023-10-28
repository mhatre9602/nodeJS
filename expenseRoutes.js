const express = require("express");

const expenseController = require("../controllers/expenseController");

const router = express.Router();

router.get("/getExpenses", expenseController.getExpenses);

// router.post("/newExpense", expenseController.createNewExpense);

router.delete("/deleteExpense/:expenseID", expenseController.deleteExpense);

module.exports = router;
