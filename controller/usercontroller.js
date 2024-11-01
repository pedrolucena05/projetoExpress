const User = require ('../models/usuario')

exports.criarUsuario = async (req, res) => {
    try {
        const { usuario_login, usuario_senha } = req.body;
        const usuario = await User.create({ usuario_login, usuario_senha });
        res.status(201).json(usuario);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto'})
    }
}

exports.listarUsuario = async (req, res) => {
    try {
        const usuario = await User.findAll(); // Busca todos os clientes
        res.status(200).json(usuario); // Retorna a lista de clientes
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos' }); // Trata o erro
    }
}