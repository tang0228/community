const Msg = require("../models/msg");

// 新增一条留言
exports.addMsg = async function (msgObj) {
    const result = await Msg.create(msgObj);
    return result.toJSON();
};

// 获取所有留言
exports.getAllMsg = async function () {
    const count = await Msg.count();
    const datas = await Msg.findAll();
    if (datas) {
        return {
            count,
            datas: JSON.parse(JSON.stringify(datas))
        }
    }
    return null;
}

// 删除一条留言
exports.deleteMsg = async function (id) {
    const result = await Msg.destroy({
        where: {
            id: id,
        }
    })
    return result;
};

