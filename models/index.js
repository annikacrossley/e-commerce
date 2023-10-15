// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category)

// Categories have many Products
Category.belongsToMany(Product, {
  through: 'CategoryProduct',
  uniqueKey: false
})

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: 'ProductTag', 
  uniqueKey: false
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: 'TagProduct',
  uniqueKey: false 
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
