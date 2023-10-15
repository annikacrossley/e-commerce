const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const categories = await Tag.findAll({include: Product})
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const id = req.params.id
  try {
    const categories = await Tag.findByPk(id, {include: Product})
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const categories = await Tag.create(req.body)
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  const id = req.params.id
  try {
    const categories = await Tag.update({ 
      where: {id}
    })
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  const id = req.params.id
  try {
    const categories = await Tag.destroy({
      where: {id}
    })
    res.json(categories)
  } catch(err) {
    res.status(500).json(err)
  }
});

module.exports = router;