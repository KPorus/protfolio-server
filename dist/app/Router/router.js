"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const protfolio_router_1 = require("../modules/protfolio.router");
const router = express_1.default.Router();
const moduleRoute = [
    {
        path: '/admin',
        router: protfolio_router_1.adminRouter
    },
];
moduleRoute.forEach((route) => router.use(route.path, route.router));
exports.default = router;
