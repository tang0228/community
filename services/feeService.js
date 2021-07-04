const Fee = require("../models/fee");

// 查询物业管理费
exports.getFeeById = async function (id) {
    const result = await Fee.findOne({
        where: {
            userId: id
        }
    });
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 获取所有收费清单
exports.getAllFee = async function () {
    const count = await Fee.count();
    const datas = await Fee.findAll();
    if (datas) {
        return {
            count,
            datas: JSON.parse(JSON.stringify(datas))
        }
    }
    return null;
}

// 新增收费
exports.addFee = async function (feeObj) {
    const result = await Fee.create(feeObj);
    return result.toJSON();
};

// 删除一条收费
exports.deleteFee = async function (id) {
    const result = await Fee.destroy({
        where: {
            id: id,
        }
    })
    return result;
};

// 修改收费清单
exports.updateFee = async function (id, feeObj) {
    const result = await Fee.update(feeObj, {
        where: {
            id: id,
        }
    });
    return result;
}