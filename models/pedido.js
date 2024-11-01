const { DataTypes } = require ('sequelize')
const sequelize = require('../config/database');
const Cliente = require('./cliente')

const Pedido = sequelize.define('Pedido', {
    pedido_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    data_compra: {
        type: DataTypes.DATE,
        allowNull: false,
    }

})

Pedido.belongsTo(Cliente, { foreignKey: 'cliente_id'});



module.exports = Pedido;