const express = require('express');
const router = express.Router();

const registerRoute = require('./auth/register');
const loginRoute = require('./auth/login');
const updateRoute = require('./auth/update');
const deleteRoute = require('./auth/delete');

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/update', updateRoute);
router.use('/delete', deleteRoute);

module.exports = router;