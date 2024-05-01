import express, { Application } from 'express';
import cors from 'cors';
require("dotenv").config();
import connectDB from './config/database';
import router from './app/Router/router';
// import toobusy from "toobusy-js";
const app = express();

// middle wares
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200,
}
const numberOfProxies = 1;
app.use(cors(corsOptions))
app.use(express.json());
app.disable("x-powered-by");
app.set("trust proxy", numberOfProxies);
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', router)
// Handler for route-not-found
app.all('*', (req, res, next) => {
    const err = new Error("Invalid Route.")
    next(err);
});

connectDB();
export default app;