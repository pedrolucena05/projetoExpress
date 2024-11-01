const express = require('express');
const router = express.Router();
const userController = require('../controller/userontroller.js')

// Rotas de produtos
router.post('/user', userController.criarUsuario);
router.get('/user', userController.listarUsuairo);


module.exports = router