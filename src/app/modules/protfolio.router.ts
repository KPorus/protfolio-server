import express from "express";
import { addProject, getProject, getSpecificProject } from "./protfolio.controller";
const router = express.Router();

router.get("/projects", getProject)
router.get("/projects/:id", getSpecificProject)
router.post("/add", addProject)
export const adminRouter = router;