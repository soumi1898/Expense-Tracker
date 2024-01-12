// app.js
const express = require('express');
const bodyParser = require('body-parser');
const expenseRoutes = require('./routes/expenseRoutes');
const sequelize = require('./util/database');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', expenseRoutes);

// Sync Sequelize models with the database
sequelize.sync().then(() => {
  app.listen(port, () => console.log(`Server running on port ${port}`));
});