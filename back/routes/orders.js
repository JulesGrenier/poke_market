const express = require('express');
const router = express.Router();

const { connection } = require('../config');

router.use(function timeLog (req, res, next) {
  console.log('Time:', Date.now(), `(request to users)`);
  next();
});

// Create order
router.post('/', (req, res) => {
  const date = new Date();

  const { order } = req.body;
  const { user_id, products } = order;

  let order_data = {
    date,
    user_id
  };

  connection.queryAsync("INSERT INTO orders SET ?", [order_data])
    .then(results => {

      let query_values = ``;
      const order_id = results.insertId;

      for (let i = 0; i < products.length; i++) {
        let {
          product_name,
          quantity,
          price
        } = products[i];
        query_values += `("${product_name}", ${quantity}, ${price}, ${order_id})${i < products.length - 1 ? ',' : ''}`;
      }

      connection.queryAsync(`INSERT INTO order_products (product_name, quantity, price, order_id) VALUES ${query_values}`);
    })
    .then(() => {
      return res.status(201).json({
        message: {
          text: "Your order has been sent",
          type: "success"
        }
    })
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Sorry, your order couldn't be sent",
          type: "error"
        }
    });
    });
});

// Get user orders
router.get('/user/:user_id', (req, res) => {
  const { user_id } = req.params;

  connection.queryAsync("SELECT users.id as `user`, orders.id as `order`, orders.date, order_products.id as order_product, order_products.product_name, order_products.quantity, order_products.price FROM users INNER JOIN orders ON orders.user_id = users.id INNER JOIN order_products ON order_products.order_id = orders.id WHERE users.id = ? ORDER BY orders.date DESC", [user_id])
    .then(results => {

      let response = {
        count: 0,
        results: []
      }

      if (results.length > 0) {
        response = {
          count: results.length,
          results
        }
      }

      return res.status(200).json(response);
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Couldn't get user orders",
          type: "error"
        }
    });
    });
});

// Get order
router.get('/:order_id', (req, res) => {
  const { order_id } = req.params;

  connection.queryAsync("SELECT users.id as `user`, orders.id as `order`, orders.date, order_products.id as order_product, order_products.product_name, order_products.quantity, order_products.price FROM users INNER JOIN orders ON orders.user_id = users.id INNER JOIN order_products ON order_products.order_id = orders.id WHERE orders.id = ? ORDER BY orders.date DESC", [order_id])
    .then(results => {

      let response = {
        count: 0,
        results: []
      };

      if (results.length > 0) {
        response = {
          count: results.length,
          results
        }
      }

      return res.status(200).json(response);
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Couldn't get order",
          type: "error"
        }
    });
    });
});

module.exports = router;