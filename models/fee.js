const sequelize = require("./db");
const { DataTypes } = require("sequelize");

// 物业费收费信息模型
module.exports = sequelize.define('Fee', {
    userId: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fixMoney: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    chargeTime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    propertyFee: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parkFee: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otherFee: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    paid: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nonPay: {
        type: DataTypes.STRING,
        get() {
            const money = (+this.fixMoney) - (+this.paid);
            return money;
        }
    }
}, {
    createdAt: false,
    updatedAt: false,
    paranoid: true
})