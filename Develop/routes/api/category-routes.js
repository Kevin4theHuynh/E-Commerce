const router = require('express').Router();
const { Category, Product } = require('../../models');



router.get('/', (req, res) => {
  Category.findAll({
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stcok', 'category_id']
    }]
  })
  // Returns promise 
  .then((catergories) => res.json(catergories))
  // Returns an error if promise is rejected
  .catch((err) => res.status(500).json(err))
});

router.get('/:id', (req, res) => {
  Category.findOne({
    where: {
      id: req.params.id,
    },
    include: [{
      model: Product,
      attributes: ['id', 'product_name', 'price', 'stock', 'category_id']
    }]
  })
  .then((catergories) => res.json(catergories))
  .catch((err) => res.status(400).json(err))
});

router.post('/', (req, res) => {
  Category.create({
    category_name: req.body.category_name})
    .then((catergories) => res.status(200).json(catergories))
    .catch((err) => res.status(400).json(err))
});

router.put('/:id', (req, res) => {
  Category.update({
    category_name: req.body.category_name
  }, {
    where: {
      id: req.params.id,
    }
  })
  .then((catergories) => res.status(200).json(catergories))
  .catch((err) => res.status(400).json(err))
});

router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    }
  })
  .then((catergories) => res.status(200).json(catergories))
  .catch((err) => res.status(400).json(err))
});

module.exports = router;
