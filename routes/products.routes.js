const express = require('express');
const router = express.Router();

const ctrls = require('../controllers')

router.get('/', ctrls.products.index);
router.post('/', ctrls.products.create);
router.put('/:id', ctrls.products.update)
router.delete('/:id', ctrls.products.destroy)

module.exports = router