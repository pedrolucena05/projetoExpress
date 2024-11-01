const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    usuario_login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Usuario;


