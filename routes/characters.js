var express = require('express');
var router = express.Router();
const characterController = require('../controllers/characterController.js')

router.get('/:id/varios', characterController.index);
router.get('/:id', characterController.buscarPersonagem);

module.exports = router;
