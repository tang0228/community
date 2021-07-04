import ins from "./request";

// 登录
export async function login(homeId, loginPwd) {
    const resp = await ins().post("/user/login", {
        homeId,
        loginPwd
    });
    return resp.data;
};

// 注销
export async function loginOut() {
    localStorage.removeItem("user");
    localStorage.removeItem("ID");
};

// 我是谁
export function whoAmI() {
    const resp = JSON.parse(localStorage.getItem("user"));
    return resp;
};

// 注册
export async function register(userObj) {
    const resp = await ins().post("/user/register", {
        ...userObj
    });
    return resp.data;
};

// 获取用户个人信息
export async function getUserIfo(id) {
    const resp = await ins().get(`/user/${id}`);
    return resp.data;
};

// 修改个人信息
export async function updateUserIfo(id, userObj) {
    const resp = await ins().put(`/user/${id}`, {
        ...userObj
    });
    return resp.data;
};

// 获取所有用户
export async function getAllUser() {
    const resp = await ins().get('/user');
    return resp.data;
}

// 删除用户
export async function deleteUser(id) {
    const resp = await ins().delete(`/user/${id}`);
    return resp.data;
}





