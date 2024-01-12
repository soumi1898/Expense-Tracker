// controllers/expenseController.js
const Expense = require('../models/expense');

module.exports = {
  getAllExpenses: async (req, res) => {
    try {
      const expenses = await Expense.findAll();
      res.render('index', { expenses });
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  addExpense: async (req, res) => {
    const { category, amount, description } = req.body;
    try {
      await Expense.create({ category, amount, description });
      res.redirect('/');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
    // Render the edit form on the same page
    renderEditForm: async (req, res) => {
        const { id } = req.params;
        try {
          const editExpense = await Expense.findByPk(id);
          res.render('index', { expenses: [], editExpense });
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      },
    

  // Handle editing and updating the data
  editExpense: async (req, res) => {
    const { id } = req.params;
    const { category, amount, description } = req.body;
    try {
      const expense = await Expense.findByPk(id);
      if (expense) {
        await expense.update({ category, amount, description });
      }
      res.redirect('/');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  deleteExpense: async (req, res) => {
    const { id } = req.params;
    try {
      const expense = await Expense.findByPk(id);
      if (expense) {
        await expense.destroy();
      }
      res.redirect('/');
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};