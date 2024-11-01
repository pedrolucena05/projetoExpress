const express = require('express');
const router = express.Router();
const clientecontroller = require('../controller/clientcontroller.js')

// Rotas de clientesa
router.post('/cliente', clientecontroller.criarCliente);
router.get('/cliente', clientecontroller.listarCliente);

module.exports = router