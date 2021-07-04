const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("mycommunity", "root", "123456", {
    host: 'localhost',
    dialect: 'mysql',
    logging: null
});

module.exports = sequelize;
