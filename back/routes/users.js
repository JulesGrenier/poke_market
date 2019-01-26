const express = require('express');
const router = express.Router();

const connection = require('../config');

router.use(function timeLog (req, res, next) {
  console.log('Time:', Date.now(), `(request to users)`);
  next();
});

// Create user
router.post('/register', (req, res) => {
  const newUser = req.body;

  connection.queryAsync(`INSERT INTO users SET ?`, [newUser])
  .then(results => {
    return res.status(201).json({
      message: {
        text: "Your account has successfuly been created",
        type: "success"
      }
    });
  })
  .catch(error => {
    console.log(error.message);
    if(error.code === "ER_DUP_ENTRY"){
      return res.status(401).json({
        message: {
          text: "Email is already used",
          type: "error"
        }
      });
    }
    return res.status(500).json({
      message: {
        text: "Couldn't create your account",
        type: "error"
      }
    });
  });
});

// Verify user
router.post('/login', (req, res) => {
  const user = req.body;
  const { email, password } = user;

  connection.queryAsync('SELECT * FROM users WHERE email = ? AND password = ?', [email, password])
    .then(results => {
      if(results.length < 1){
        return res.json({
          message: {
            text: "Your email or password is incorrect",
            type: "error"
          }
        });
      }

      return res.json(200, {
        results,
        message: {
          text: "You're logged on your account",
          type: "success"
        }
      });
    })
    .catch(error => {
      console.log(error.message);
      return res.json(500, {
        message: {
          text: "Couldn't log to your account",
          type: "error"
        }
      });
    });
});

// Get user infos
router.get('/:id', (req, res) => {
  const { id } = req.params;

  connection.queryAsync(`SELECT * FROM users WHERE id = ?`, [id])
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
        text: "Couldn't get your account informations",
        type: "error"
      }
  });
  });
});

// Update user
router.put('/:id', (req, res) => {
  const data = req.body;
  const { id } = req.params;
  connection.queryAsync(`UPDATE users SET ? WHERE id= ?`, [data, id])
  .then(results => {
    return res.status(201).json({
      message: {
        text: "Your account has successfuly been updated",
        type: "success"
      }
    });
  })
  .catch(error => {
    console.log(error.message);
    return res.status(500).json({
      message: {
        text: "Couldn't update your account",
        type: "error"
      }
    });
  });
});

// Delete user
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  connection.queryAsync(`DELETE FROM users WHERE id = ?`, [id])
  .then(results => {
    return res.status(200).json({
      message: {
        text: "Your account has successfuly been deleted",
        type: "success"
      }
    });
  })
  .catch(error => {
    console.log(error.message);
    return res.status(500).json({
      message: {
        text: "Couldn't delete your account",
        type: "error"
      }
  });
  });
});

module.exports = router;