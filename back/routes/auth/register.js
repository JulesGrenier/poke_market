const express = require('express');
const router = express.Router({mergeParams: true});
const bcrypt = require('bcrypt');
const { connection } = require('../../config');
const saltRounds = 10;


router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now(), ' (user register request)');
  next();
});

router.post('/', (req, res) => {
  const {
    firstname,
    lastname,
    email,
    password
  } = req.body;

  if(
    !firstname
    || !lastname
    || !email
    || !password
  ) {
    return res.status(401).json({
      message: {
        text: 'You need to fill in all the fields',
        type: 'error'
      }
    });
  }

  return bcrypt.hash(password, saltRounds, async (error, hash) => {
    if (error) {
      return res.status(500).json({
        message: {
          text: 'Account creation failed',
          type: 'error'
        }
      });
    }

    const user = {
      firstname,
      lastname,
      email,
      password: hash,
      money: 10
    };

    connection.queryAsync('INSERT INTO users SET ?', [user])
      .then(results => {
        return res.status(201).json({
          message: {
            text: 'Your account has successfuly been created',
            type: 'success'
          }
        });
      })
      .catch(error => {
        console.log(error.message);
        if (error.code === 'ER_DUP_ENTRY') {
          return res.status(401).json({
            message: {
              text: 'Email is already used',
              type: 'error'
            }
          });
        }
        return res.status(500).json({
          message: {
            text: 'Account creation failed',
            type: 'error'
          }
        });
      });

  });

});

module.exports = router;