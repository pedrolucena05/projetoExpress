const express = require('express');
const router = express.Router();
const produtoController = require('../controller/productcontroller.js')

// Rotas de produtos
router.post('/produtos', produtoController.criarProduto);
router.get('produtos', produtoController.listarProduto);


module.exports = router