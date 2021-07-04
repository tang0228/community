import ins from "./request";

// 新增留言
export async function addMsg(msgObj) {
    const resp = await ins().post("/msg", {
        ...msgObj
    });
    return resp.data;
};

// 获取所有留言
export async function getAllMsg() {
    const resp = await ins().get("/msg");
    return resp.data;
};

// 删除一条留言
export async function deleteMsg(id) {
    const resp = await ins().delete(`/msg/${id}`);
    return resp.data;
}