const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');
const Pedido = require('./pedido');
const Produto = require('./product');

const detalhesPedido = sequelize.define('detalhesPedido', {
    dt_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    dt_valor: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    dt_desconto: {
        type:DataTypes.FLOAT,
        allowNull: false,
    }
});

detalhesPedido.belongsTo(Pedido, { foreignKey: 'categoria_id'});
detalhesPedido.hasMany(Produto, { foreignKey: 'produto_id'});

module.exports = detalhesPedido;
