const Pedido = require ('../models/pedido');

exports.criarPedido = async (req, res) => {
    try {
        const { client_id , data_pedido } = req.body;
        const cliente = await Cliente.findByPk(client_id);
        if (!cliente) {
            return res.status(404).json({message: 'O cliente não foi encontrado'});
        }

        const novoPedido = await Pedido.create ({
            client_id: client_id,
            data_pedido: data_pedido
        });
        return res.status(201).json(novoPedido);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar Pedido', error})
    }
}

exports.listarPedido = async (req, res) => {
    try {
        const pedidos = await Pedido.findAll(); // Busca todos os clientes
        res.status(200).json(pedidos); // Retorna a lista de clientes
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar pedidos' }); // Trata o erro
    }
}
