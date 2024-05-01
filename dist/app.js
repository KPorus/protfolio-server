"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
require("dotenv").config();
const database_1 = __importDefault(require("./config/database"));
const router_1 = __importDefault(require("./app/Router/router"));
// import toobusy from "toobusy-js";
const app = (0, express_1.default)();
// middle wares
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
};
const numberOfProxies = 1;
app.use((0, cors_1.default)(corsOptions));
app.use(express_1.default.json());
app.disable("x-powered-by");
app.set("trust proxy", numberOfProxies);
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/api/v1', router_1.default);
// app.use('/', (req,res,next)=>{
//     res.status(404).send("I am watching you ")
//     next();
// })
// Handler for route-not-found
app.all('*', (req, res, next) => {
    const err = new Error("Invalid Route.");
    next(err);
});
(0, database_1.default)();
exports.default = app;
