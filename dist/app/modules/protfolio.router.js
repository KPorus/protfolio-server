"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminRouter = void 0;
const express_1 = __importDefault(require("express"));
const protfolio_controller_1 = require("./protfolio.controller");
const router = express_1.default.Router();
router.get("/projects", protfolio_controller_1.getProject);
router.get("/projects/:id", protfolio_controller_1.getSpecificProject);
exports.adminRouter = router;
