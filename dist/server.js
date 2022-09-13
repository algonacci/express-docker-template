"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 8000;
app.get("/", (req, res) => {
    res.send("⚡️Express + TypeScript Server");
});
app.listen(PORT, () => {
    console.log(`🚀 [SERVER] is running on port http://localhost:${PORT}`);
});
