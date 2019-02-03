const express = require('express');
const router = express.Router();

const { connection } = require('../config');

router.use(function timeLog (req, res, next) {
  console.log('Time:', Date.now(), `(request to products)`);
  next();
});


// GET products list
router.get('/', (req, res) => {
  let limit = req.query.limit;
  let offset = req.query.offset;
  if (!limit) {
    limit = 20;
  }
  if (!offset) {
    offset = 0;
  }
  connection.queryAsync(`SELECT products.*, categories.name AS category_name, categories.slug AS category_slug FROM products JOIN categories ON categories.id = category_id ORDER BY products.name LIMIT ${limit} OFFSET ${offset}`)
    .then((results) => {
      res.status(200).json({
        results
      })
    })
    .catch(error => {
      res.status(500).json({
        error: error.message
      })
    });
});

// GET product by id/slug
router.get('/:info', (req, res) => {
  const { info } = req.params;
  let query = '';

  if (parseInt(info) + 1) {
    query = 'SELECT products.*, categories.name AS category_name, categories.slug AS category_slug FROM products JOIN categories ON categories.id = category_id WHERE products.id = ? ORDER BY products.name';
  }
  else {
    query = 'SELECT products.*, categories.name AS category_name, categories.slug AS category_slug FROM products JOIN categories ON categories.id = category_id WHERE products.slug = ? ORDER BY products.name' ;
  }

  connection.queryAsync(query, [info])
  .then((results) => {
    res.status(200).json({
      results
    })
  })
  .catch(error => {
    res.status(500).json({
      error: error.message
    })
  });
});

module.exports = router;