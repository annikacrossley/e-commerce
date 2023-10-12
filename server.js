const express = require('express');
const routes = require('./routes');

// import sequelize connection
const {Sequelize, DataTypes} = require('sequelize')
const sequelize = new Sequelize('thirteen_db', 'root', 'Teague50!', {
  host: 'localhost',
  dialect: 'mysql'
})

//Models
//Category
const Categories = sequelize.define('Category', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  category_name: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

//Product
const Products = sequelize.define('Product', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
    validate: true
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 10,
    validate: true
  },
  category_id: {
    type: DataTypes.INTEGER
    //references the category model's ID 
  }
})

//Tag
const Tags = sequelize.define('Tag', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  tag_name: {
    type: DataTypes.STRING
  }
})

//Product Tag
const ProductsTags = sequelize.define('ProductTag', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  product_id: {
    type: DataTypes.INTEGER
    //references the product model's ID
  },
  tag_id: {
    type: DataTypes.INTEGER
    //references the tag model's ID
  }
})

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
