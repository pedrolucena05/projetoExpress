const Produto = require ('../models/product')

exports.criarProduto = async (req, res) => {
    try {
        const { produto_nome, produto_preco } = req.body;
        const produto = await Produto.create({ produto_nome, produto_preco });
        res.status(201).json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao criar produto'})
    }
}

/*
exports.alterarProduto = async (req, res) => {
    try {
        //Recupera parametro
        const { id } = req.params;
        //Recupera o corpo da requisição
        const { nome, preco } = req.body;

        // Encontra o produto pelo id e atualiza
        const [updated] = await Produto.update({ nome , preco }, {where: { id }})

        if (updated) {
            const produtoAtualizado = await Produto.findByPk(id); // Recupera o produto atualizado
            res.status(200).json(produtoAtualizado);
        } else {
            res.status(404).json({ error: 'Produto não encontrado' });
        }
        
    } catch (error) {
            res.status(500).json({ error: 'Erro ao alterar Produto'});
    }
}

exports.excluirProduto = async (req, res) => {
    try {
        const { id } = req.params

        const excluir = await Produto.destroy({where:{id}})

        if (excluir) {
            res.status(204).send()
        }
        else {
            res.status(404).json({error: 'Produto não encontrado'})
        }
    } catch (error) {
        res.status(500).json({error: 'Erro ao excluir o produto'})
    }
}
*/

exports.listarProduto = async (req, res) => {
    try {
        const produtos = await Produto.findAll(); // Busca todos os clientes
        res.status(200).json(produtos); // Retorna a lista de clientes
    } catch (error) {
        res.status(500).json({ error: 'Erro ao listar produtos' }); // Trata o erro
    }
}