"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var PORT = process.env.PORT || 3001;
var allowedOrigins = ['http://localhost:80', 'http://localhost', 'http://frontend:80'];
var app = (0, express_1.default)();
var options = {
    origin: allowedOrigins
};
app.use((0, cors_1.default)(options));
app.get('/', function (req, res) {
    var oceans = [
        {
            Name: "Indian Ocean"
        },
        {
            Name: "Atlantic Ocean"
        }
    ];
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify(oceans, null, 3));
});
app.listen(PORT, function () {
    console.log("app running on port ".concat(PORT));
});
