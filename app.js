const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/produtoRoute')
const sequelize = require('./config/database');
const clientRoutes = require('./routes/clientRoute')
const categoriaRoutes = require('./routes/categoriaRoute');
const pedidoRoutes = require('./routes/pedidoRoute');


const Cliente = require('./models/cliente'); // Ajuste o caminho conforme necessário
const Produto = require('./models/product'); // Ajuste o caminho conforme necessário


const app = express();
app.use(bodyParser.json());
app.use('/api', productRoutes);
app.use('/api', clientRoutes);
app.use('/api', categoriaRoutes);
app.use('/api', pedidoRoutes);

const startServer = async () => {
    try {
        await sequelize.sync({ force: true }); // use { force: true } para recriar tabelas
        console.log('Banco de dados conectado.');
        app.listen(3000, () => {
            console.log('servidor rodando na porta 3000');
        });
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados: ', error)
    }
};

startServer();