import express from 'express'
import { adminRouter } from '../modules/protfolio.router';

const router = express.Router();

const moduleRoute = [
    {
        path: '/admin',
        router: adminRouter
    },
]

moduleRoute.forEach((route) => router.use(route.path, route.router));

export default router;