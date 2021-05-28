const express = require('express');
const users = require('../apiServices/v1/users/routes');

const router = express.Router();

router.use('/users', users);

module.exports = router;
