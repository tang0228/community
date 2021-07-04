const sequelize = require("./db");
const { DataTypes } = require("sequelize");

// 创建用户对象模型
module.exports = sequelize.define('User', {
    homeId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    loginPwd: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    userName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    sex: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    profession: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    entryTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    homeSize: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    peoples: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    mobile: {
        type: DataTypes.STRING(11),
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
});
