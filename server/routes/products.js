const express = require('express');
const router = express.Router();
const productsController = require('../controllers/products.controller')

router.get('/api/products', productsController.getProducts)
router.post('/api/products', productsController.addProduct)
router.get('/api/products/:id', productsController.getProduct)
router.put('/api/products/:id', productsController.editProduct)
router.delete('/api/products/:id', productsController.deleteProduct)

module.exports = router