const express = require('express');
const router = express.Router();

const connection = require('../config');

router.use(function timeLog(req, res, next) {
  console.log('Time:', Date.now(), `(request to users)`);
  next();
});

// Create cart
router.post('/', (req, res) => {
  const { cart } = req.body;
  const { user_id, products } = cart;

  connection.queryAsync("INSERT INTO carts (user_id) VALUES (?)", [user_id])
    .then(results => {

      let query_values = ``;
      const cart_id = results.insertId;

      for (let i = 0; i < products.length; i++) {
        let {
          product_name,
          quantity,
          price
        } = products[i];
        query_values += `("${product_name}", ${quantity}, ${price}, ${cart_id})${i < products.length - 1 ? ',' : ''}`;
      }

      connection.queryAsync(`INSERT INTO cart_products (product_name, quantity, price, cart_id) VALUES ${query_values}`);
    })
    .then(() => {
      return res.status(201).json({
        message: {
          text: "Cart has been added",
          type: "success"
        }
    })
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Cart couldn't be added",
          type: "error"
        }
    });
    });
});

// Get user cart
router.get('/user/:user_id', (req, res) => {
  const { user_id } = req.params;

  connection.queryAsync("SELECT users.id as `user`, carts.id as `cart`, cart_products.id as cart_product, cart_products.product_name, cart_products.quantity, cart_products.price FROM users INNER JOIN carts ON carts.user_id = users.id INNER JOIN cart_products ON cart_products.cart_id = carts.id WHERE users.id = ?", [user_id])
    .then(results => {
      return res.status(200).json({
        count: results.length,
        results: results
      });
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Failed to get cart",
          type: "error"
        }
      });
    });
});

// Update user cart_product
router.put('/product/:id', (req, res) => {
  const { id } = req.params;
  const data = req.body;

  connection.queryAsync("UPDATE TABLE cart_products SET ? WHERE id = ?", [data, id])
    .then(results => {
      return res.status(201).json({
        message: {
          text: "Your cart has been updated",
          type: "success"
        }
      });
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Couldn't update your cart",
          type: "error"
        }
      });
    });
});

// Delete user cart
router.delete('/user/:user_id', (req, res) => {
  const { user_id } = req.params;

  connection.queryAsync("DELETE FROM carts WHERE user_id = ?", [user_id])
    .then(results => {
      return res.status(201).json({
        message: {
          text: "Cart has been deleted",
          type: "success"
        }
      });
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: "Couldn't delete cart",
          type: "error"
        }
      });
    });
});

module.exports = router;