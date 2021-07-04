const express = require("express");
const router = express.Router();
const { asyncHandler } = require('../getSendResult');
const userServ = require("../../services/userService");

router.post('/register', asyncHandler(async (req, res) => {
    return await userServ.addUser(req.body);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    return await userServ.deleteUser(req.params.id);
}));

router.put("/:id", asyncHandler(async (req, res) => {
    return await userServ.updateUser(req.params.id, req.body);
}));

router.get("/", asyncHandler(async (req, res) => {
    return await userServ.getAllUser();
}));

router.post("/login", asyncHandler(async (req, res) => {
    const result = await userServ.login(req.body.homeId, req.body.loginPwd);
    return result;
}));

router.get("/whoami", asyncHandler(async (req, res) => {
    return await userServ.getUserById(req.body.homeId)
}));

router.get("/:id", asyncHandler(async (req, res) => {
    return await userServ.getUserById(req.params.id);
}));

module.exports = router;
