const express = require("express");
const router = express.Router();
const { asyncHandler } = require( '../getSendResult');
const feeServ = require("../../services/feeService");

router.post('/', asyncHandler(async (req, res) => {
    return await feeServ.addFee(req.body);
}));

router.delete("/:id", asyncHandler(async (req, res) => {
    return await feeServ.deleteFee(req.params.id);
}));

router.put("/:id", asyncHandler(async (req, res) => {
    return await feeServ.updateFee(req.params.id, req.body);
}));

router.get("/:id", asyncHandler(async (req, res) => {
    return await feeServ.getFeeById(req.params.id);
}));

router.get("/", asyncHandler(async (req, res) => {
    return await feeServ.getAllFee();
}));

module.exports = router;
