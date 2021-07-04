const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Msg = sequelize.define('Msg', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    msg: {
        type: DataTypes.STRING(),
        allowNull: false,
    },
}, {
    createdAt: true,
    updatedAt: false,
    paranoid: true,
});

module.exports = Msg;

