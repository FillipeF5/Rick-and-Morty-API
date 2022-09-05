var express = require('express');
var router = express.Router();
const characterController = require('../controllers/characterController.js')

router.get('/:id/varios', characterController.varios);
router.get('/:id', characterController.buscarPersonagem);
router.get('/', characterController.index);
router.post('/', characterController.buscando);


module.exports = router;
