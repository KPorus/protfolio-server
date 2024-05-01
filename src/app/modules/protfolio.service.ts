import { Request,Response } from "express";
import { Project } from "./protfolio.model";
import { IProject } from "./protfolio.interface";

export const getProjects = async() => {
    const result = await Project.find();
    if(result.length > 0) {
        return result
    }
    return null;
}
export const getSpecificProjects = async(id:string) => {
    const result = await Project.findOne({_id:id});
    if(result) {
        return result
    }
    return null;
}
export const addSpecificProjects = async(body:IProject) => {
    const result = await Project.create(body);
    if(result) {
        return result
    }
    return null;
}