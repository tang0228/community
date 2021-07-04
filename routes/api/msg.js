const express = require("express");
const router = express.Router();
const { asyncHandler } = require('../getSendResult');
const msgServ = require("../../services/msgService");

// 新增一条留言
router.post('/', asyncHandler(async (req, res) => {
    return await msgServ.addMsg(req.body);
}));

// 删除一条留言
router.delete("/:id", asyncHandler(async (req, res) => {
    return await msgServ.deleteMsg(req.params.id);
}));

// 获取所有留言
router.get("/", asyncHandler(async (req, res) => {
    return await msgServ.getAllMsg();
}));

module.exports = router;
