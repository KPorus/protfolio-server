import { NextFunction, Request, Response } from 'express';
import { addSpecificProjects, getProjects, getSpecificProjects } from './protfolio.service';
import { isValidObjectId } from 'mongoose';
//import { VoterPage, adminService } from "./protfolio.service";

export const getProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const result = await getProjects();
        res.status(200).json({ sucess: true, result });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getSpecificProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        if (isValidObjectId(id)) {
            const result = await getSpecificProjects(id);
            return res.status(200).json({ sucess: true, result });
        }
        else {
            throw new Error('Invalid Id')
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}
export const addProject = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;
        const result = await addSpecificProjects(body);
        return res.status(200).json({ sucess: true, result });
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const protfolioController = {
    getProject,
    getSpecificProject,
    addProject
};

