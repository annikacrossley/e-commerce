const express = require('express');
const routes = require('./routes');
require('dotenv').config();

// import sequelize connection
const Sequelize = require('sequelize');
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
      host: 'localhost',
      dialect: 'mysql',
      dialectOptions: {
        decimalNumbers: true,
      },
    });
    
require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.get('/api/create-category', (req, res) => {
  res.send('Create category route hit!')
})

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  console.log('Database synced!')
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
})

