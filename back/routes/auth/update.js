const express = require('express');
const router = express.Router({ mergeParams: true });
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { connection, secretKey } = require('../../config');
const saltRounds = 10;

const checkAuthorizationHeader = (req, res, next) => {
  const authHeader = req.get('Authorization');
  if (!authHeader) {
    return res.status(401).json({
      error: 'An Authorization header is needed'
    });
  }
  const token = authHeader.substr(7);
  jwt.verify(token, secretKey, (error) => {
    if (error) {
      return res.status(401).json({
        error: 'Invalid token'
      });
    }
  });
  next();
};

router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now(), ' (user update request)');
  next();
});

router.put('/', checkAuthorizationHeader, (req, res) => {
  const {
    id,
    firstname,
    lastname,
    email,
    newEmail,
    currentPassword,
    newPassword,
    newPasswordConf
  } = req.body;

  let newData = {
    id,
    firstname,
    lastname
  };
  let user = {
    id,
    firstname,
    lastname,
    email
  };

  connection.queryAsync('SELECT * FROM users WHERE id = ? AND email = ?', [id, email])
    .then(users => {
      if (!users[0]) {
        return res.status(401).json({
          message: {
            text: 'User not found',
            type: "error"
          }
        });
      }

      if (!currentPassword) {
        return res.status(401).json({
          message: {
            text: 'You need to provide your current password',
            type: 'error'
          }
        });
      }

      bcrypt.compare(currentPassword, users[0].password, async (error, passwordsMatch) => {
        if (error) {
          console.log(error.message);
          return res.status(500).json({
            message: {
              text: 'Credentials check failed',
              type: 'error'
            }
          });
        }

        if (!passwordsMatch) {
          return res.status(401).json({
            message: {
              text: 'The current password you provided is wrong',
              type: 'error'
            }
          });
        }

        if (newEmail) {
          if (newEmail === email) {
            return res.status(401).json({
              message: {
                text: 'Current and new emails are equal',
                type: "error"
              }
            })
          }

          newData.email = newEmail;
          user.email = newEmail;
        }

        if (newPassword) {
          if (newPassword !== newPasswordConf) {
            return res.status(401).json({
              message: {
                text: 'New passwords do not match',
                type: 'error'
              }
            });
          }

          await bcrypt.hash(newPassword, saltRounds)
            .then(hash => {
              newData.password = hash;
            })
            .catch(error => {
              console.log(error.message);
              res.status(500).json({
                message: {
                  text: 'Password update failed',
                  type: 'error'
                }
              });
            });

        }

        if (!Object.keys(newData).length > 0) {
          return res.status(200).json({
            message: {
              text: 'No changes have been made',
              type: 'neutral'
            }
          });
        }

        connection.queryAsync('UPDATE users SET ? WHERE id = ?', [newData, id])
          .then(results => {
            jwt.sign(user, secretKey, (error, token) => {
              if (error) {
                return res.status(401).json({
                  message: {
                    text: 'Session token update failed',
                    type: 'error'
                  }
                });
              }
              return res.status(201).json({
                message: {
                  text: 'Changes have been saved',
                  type: 'success'
                },
                user,
                token
              });
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
                text: 'Internal server error',
                type: 'error'
              }
            });
          });

      });

    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: 'Your informations failed to update',
          type: 'error'
        }
      });
    });



});

module.exports = router;