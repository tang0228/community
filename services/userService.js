const User = require("../models/user");

// 添加一名用户
exports.addUser = async function (userObj) {
    const ins = await User.create(userObj);
    return ins.toJSON();
};

// 删除用户
exports.deleteUser = async function (userId) {
    const result = await User.destroy({
        where: {
            id: userId,
        }
    });
    return result;
}

// 修改用户信息
exports.updateUser = async function (id, userObj) {
    const result = await User.update(userObj, {
        where: {
            id
        },
    });
    return result;
}

// 登录
exports.login = async function (userId, loginPwd) {
    const result = await User.findOne({
        where: {
            homeId: userId,
            loginPwd
        },
    });
    if (result && result.homeId === userId) {
        return result.toJSON();
    }
    return null;
};

// 获取个人信息
exports.getUserById = async function (userId) {
    const result = await User.findByPk(userId);
    if (result) {
        return result.toJSON();
    }
    return null;
};

// 获取所有用户
exports.getAllUser = async function () {
    const count = await User.count();
    const datas = await User.findAll();
    if (datas) {
        return {
            count,
            datas: JSON.parse(JSON.stringify(datas))
        }
    }
    return null;
}