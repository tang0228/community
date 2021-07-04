// 对象的过滤
export function filterObj(obj, arr) {
    if (typeof obj !== 'object' || !Array.isArray(arr)) {
        return;
    }
    const result = {};
    Object.keys(obj).filter(key => !arr.includes(key)).forEach(key => {
        result[key] = obj[key];
    });
    return result;
};


