const express = require('express');
const router = express.Router();
const pedidocontroller = require('../controller/pedidocontroller.js')

// Rotas de pedidos
router.post('/pedido', pedidocontroller.criarPedido);
router.get('/pedido', pedidocontroller.listarPedido);


module.exports = router