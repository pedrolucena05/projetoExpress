const Cliente = require ('../models/cliente')

exports.criarCliente = async (req, res) => {
    try {
        const { cliente_nome, cliente_email } = req.body;
        const cliente = await Cliente.create({ cliente_nome, cliente_email });
        res.status(201).json(cliente);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar cliente'})
    }
}

/*
exports.alterarCliente = async (req, res) => {
    try {
        //Recupera parametro
        const { id } = req.params;
        //Recupera o corpo da requisição
        const { nome, email } = req.body;

        // Encontra o cliente pelo id e atualiza
        const [updated] = await Cliente.update({ nome , email }, {where: { id }})

        if (updated) {
            const clienteAtualizado = await Cliente.findByPk(id); // Recupera o cliente atualizado
            res.status(200).json(clienteAtualizado);
        } else {
            res.status(404).json({ error:  'Cliente não encontrado' });
        }
        
    } catch (error) {
            res.status(500).json({ error: 'Erro ao alterar Cliente'});
    }
}

exports.excluirCliente = async (req, res) => {
    try {
        const { id } = req.params

        const excluir = await Cliente.destroy({where:{id}})

        if (excluir) {
            res.status(204).send()
        }
        else {
            res.status(404).json({error:  'Cliente não encontrado'})
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir o cliente'})
    }
}
*/

exports.listarCliente = async (req, res) => {
    try {
        const clientes = await Cliente.findAll(); // Busca todos os clientes
        res.status(200).json(clientes); // Retorna a lista de clientes
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar clientes' }); // Trata o erro
    }
}
