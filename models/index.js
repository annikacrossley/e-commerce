// import models
const Category = require('./Category');
const Product = require('./Product');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category)

// Categories have many Products
Category.belongsToMany(Product)

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, { 
  through: 'ProductTags', 
  uniqueKey: false
})

// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, { 
  through: 'ProductTags',
  uniqueKey: false 
})

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
