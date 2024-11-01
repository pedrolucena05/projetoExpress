const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');
const Categoria = require('./categoria');

const Produto = sequelize.define('Produto', {
    
    produto_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    produto_nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    produto_preco: {
        type:DataTypes.FLOAT,
        allowNull: false,
    }

})

Produto.belongsTo(Categoria, { foreignKey: 'categoria_id'});

module.exports = Produto;

