// routes/expenseRoutes.js
const express = require('express');
const expenseController = require('../controllers/expenseController');

const router = express.Router();

router.get('/', expenseController.getAllExpenses);
router.post('/addExpense', expenseController.addExpense);
// Change the route for rendering the edit form to use GET
router.get('/editExpense/:id', expenseController.renderEditForm);
router.post('/editExpense/:id', expenseController.editExpense);
router.post('/deleteExpense/:id', expenseController.deleteExpense);

module.exports = router;