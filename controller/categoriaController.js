const User = require ('../models/categoria')

exports.criarCategoria = async (req, res) => {
    try {
        const { categoria_nome } = req.body;
        const categoria = await User.create({ categoria_nome });
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar categoria'})
    }
}

exports.listarCategoria = async (req, res) => {
    try {
        const categoria = await User.findAll(); // Busca todos os clientes
        res.status(200).json(categoria); // Retorna a lista de clientes
    } catch (error) {
        res.status(500).json({ error: 'Erro ao categorias' }); // Trata o erro
    }
}