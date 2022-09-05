var express = require('express');
const characterController = require('../controllers/characterController');
var router = express.Router();

/* GET home page. */
router.get('/', characterController.index)

module.exports = router;
