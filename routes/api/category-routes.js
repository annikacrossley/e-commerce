const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  // find all categories
  // be sure to include its associated Products
  try {
    const categories = await Category.findAll({include: Product})
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  const id = req.params.id
  try {
    const categories = await Category.findByPk(id, {include: Product})
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const categories = await Category.create(req.body)
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value\
  const id = req.params.id
  try {
    const categories = await Category.update({ 
      where: {id}
    })
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  const id = req.params.id
  try {
    const categories = await Category.destroy({
      where: {id}
    })
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;