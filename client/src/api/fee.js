import ins from "./request";

// 得到用户的收费清单
export async function getUserFee(id) {
    const resp = await ins().get(`/fee/${id}`);
    return resp.data;
};

// 获取所有费用清单
export async function getAllFee() {
    const resp = await ins().get('/fee');
    return resp.data;
};

// 删除一条收费清单
export async function deleteFee(id) {
    const resp = await ins().delete(`/fee/${id}`);
    return resp.data;
};

// 修改一条收费清单
export async function updateFee(id, feeObj) {
    const resp = await ins().put(`/fee/${id}`, {
        ...feeObj
    });
    return resp.data;
};

// 新增一条收费清单
export async function addFee(feeObj) {
    const resp = await ins().post('/fee', {
        ...feeObj
    });
    return resp.data;
}