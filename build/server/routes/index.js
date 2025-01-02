"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
exports.router = router;
router.get("/", (req, res) => {
    res.send("inicio");
});
router.post("/teste/:id", (req, res) => {
    console.log(req.params.id);
    console.log(req.cookies);
    console.log(req.query);
    console.log(req.body);
    res.json({ message: "processado." });
});
