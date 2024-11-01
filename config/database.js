const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('sge', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports = sequelize;