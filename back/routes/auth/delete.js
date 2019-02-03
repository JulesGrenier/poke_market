const express = require('express');
const router = express.Router({mergeParams: true});
const jwt = require('jsonwebtoken');
const { connection, secretKey } = require('../../config');

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
  console.log('Time: ', Date.now(), ' (user delete request)');
  next();
});

router.delete('/', checkAuthorizationHeader, (req, res) => {
  const { authorization } = req.headers;
  const token = authorization.substr(7);
  const { id } = jwt.decode(token);
  console.log(token);

  return connection.queryAsync('DELETE FROM users WHERE ID = ?', [id])
    .then(results => {
      return res.status(200).json({
        message: {
          text: 'Your account has been deleted',
          type: 'success'
        }
      })
    })
    .catch(error => {
      console.log(error.message);
      return res.status(500).json({
        message: {
          text: 'Account deletion failed',
          type: 'error'
        }
      })
    });

});

module.exports = router;