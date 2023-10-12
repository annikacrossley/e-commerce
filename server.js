const express = require('express');
const routes = require('./routes');

// import sequelize connection
const {Sequelize, DataTypes, Model} = require('sequelize')
const sequelize = new Sequelize('thirteen_db', 'root', 'Teague50!', {
  host: 'localhost',
  dialect: 'mysql'
})

//Models
//Category
class Category extends Model {}
Category.init({
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
class Product extends Model {}
Product.init({
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
class Tag extends Model {}
Tag.init({
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
class ProductTag extends Model {}
ProductTag.init({
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
