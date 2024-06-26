"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const server = http_1.default.createServer((req, res) => {
    res.writeHead(200, { 'Content-type': 'application/json' });
    res.end(JSON.stringify({
        data: "It works"
    }));
});
server.listen(3000, () => {
    console.log("Servidor rodando...");
});
