const express = require('express');
const router = express.Router({mergeParams: true});
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { connection, secretKey } = require('../../config');


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now(), ' (user login request)');
  next();
});


// Login
router.post('/', (req, res) => {
  const { email, password } = req.body;

  connection.queryAsync('SELECT * FROM users WHERE email = ?', [email])
    .then(results => {
      if (results.length < 1) {
        return res.json({
          message: {
            text: 'Your email or password is incorrect',
            type: 'error'
          }
        });
      }
      const password_hash = results[0].password;

      bcrypt.compare(password, password_hash, (error, passworsMatch) => {
        if (error) {
          console.log(error.message);
          return res.status(500).json({
            message: {
              text: 'Credentials check failed',
              type: 'error'
            }
          });
        }
        if (!passworsMatch) {
          return res.status(401).json({
            message: {
              text: 'Your email or password is incorrect',
              type: 'error'
            }
          });
        }

        const user = {
          id: results[0].id,
          firstname: results[0].firstname,
          lastname: results[0].lastname,
          email: results[0].email,
          money: results[0].money
        };

        jwt.sign(user, secretKey, (error, token) => {
          if (error) {
            return res.status(401).json({
              message: {
                text: 'Session token generation failed',
                type: 'error'
              }
            });
          }
          return res.status(200).json({
            message: {
              text: 'You have been logged in',
              type: 'success'
            },
            token
          });
        });
      });
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: 'Couldn\'t log to your account',
          type: 'error'
        }
      });
    });
});

module.exports = router;