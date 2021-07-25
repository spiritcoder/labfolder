const express = require('express');
const router = express.Router();

const balanceController = require('../Controllers/Users/balanceController')

router.use('/getBalance/',balanceController.getCurrentBalance)


module.exports = router;
