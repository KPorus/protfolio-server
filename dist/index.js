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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.port || 5000;
let server;
process.on("uncaughtException", err => {
    process.exit(1);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            app_1.default.listen(port, () => {
                console.log(`Server is runing at ${port}`);
            });
        }
        catch (error) {
            console.error("Error starting server:", error);
        }
        process.on("unhandledRejection", error => {
            if (server) {
                server.close(() => {
                    console.log(error);
                    process.exit(1);
                });
            }
            else {
                process.exit(1);
            }
        });
    });
}
main();
process.on("SIGTERM", () => {
    console.log("SIGTERM is received!");
    if (server) {
        server.close();
    }
});
// const express = require('express');
// const cors = require('cors');
// const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
// const { param } = require('express/lib/request');
// require('dotenv').config();
// const app = express();
// const port = process.env.PORT || 5000;
// // fun part
// // app.use((req:Request, res:Response, next:Next) => {
// //     console.log(req.path, "I am watching you.")
// //     next();
// // })
// // middle wares
// const corsOptions ={
//     origin:'*', 
//     credentials:true,    
//     optionSuccessStatus:200,
//  }
//  app.use(cors(corsOptions))
// app.use(express.json());
// // const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.1rqmivg.mongodb.net/?retryWrites=true&w=majority`;
// // const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// // async function run() {
// //     try {
// //         const projectCollection = client.db('protfolio').collection('project');
// //         app.get("/",(req,res)=>
// //         {
// //             res.send("I am watching you.")
// //         })
// //         app.get("/projects",async(req,res)=>
// //         {
// //             const query = {}
// //             const result = await projectCollection.find(query).toArray()
// //             res.send(result)
// //         })
// //         app.get("/projects/:id",async(req,res)=>
// //         {
// //             const id = req.params.id;
// //             const query = {_id:ObjectId(id)}
// //             const result = await projectCollection.find(query).toArray();
// //             res.send(result);
// //         })
// //     }
// //     finally {
// //     }
// // }
// // run().catch(err => console.error(err));
// app.listen(port, (req, res) => {
//     console.log(` server running on ${port}`);
// })
