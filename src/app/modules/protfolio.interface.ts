import { Document } from "mongoose";

export interface IProject extends Document {
    title: string;
    details: string;
    img?: string;
    feature: string[];
    // skills: string[];
    TECHNOLOGY: string[];
    client?: string;
    live?: string;
    server?: string;
  }