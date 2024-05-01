"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protfolioController = exports.getSpecificProject = exports.getProject = void 0;
const protfolio_service_1 = require("./protfolio.service");
const mongoose_1 = require("mongoose");
//import { VoterPage, adminService } from "./protfolio.service";
const getProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield (0, protfolio_service_1.getProjects)();
        res.status(200).json({ sucess: true, result });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getProject = getProject;
const getSpecificProject = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        if ((0, mongoose_1.isValidObjectId)(id)) {
            const result = yield (0, protfolio_service_1.getSpecificProjects)(id);
            return res.status(200).json({ sucess: true, result });
        }
        else {
            throw new Error('Invalid Id');
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
});
exports.getSpecificProject = getSpecificProject;
exports.protfolioController = {
    getProject: exports.getProject,
    getSpecificProject: exports.getSpecificProject
};
