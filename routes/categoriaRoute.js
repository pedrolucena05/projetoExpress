const express = require('express');
const router = express.Router();
const categoriaController = require('../controller/categoriaController.js')

// Rotas de clientesa
router.post('/categoria', categoriaController.criarCategoria);
router.get('/categoria', categoriaController.listarCategoria);

module.exports = router