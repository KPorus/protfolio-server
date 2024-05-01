import { Server } from "http";
import app from "./app";
const port = process.env.port || 5000;

let server: Server;
process.on("uncaughtException", err =>
{
    process.exit(1);
})
async function main()
{
    try
    { 
        app.listen(port, () =>
        {
            console.log(`Server is runing at ${port}`);
        })
    } catch (error)
    {
        console.error("Error starting server:", error);
    } process.on("unhandledRejection", error =>
    {
        if (server)
        {
            server.close(() =>
            {
                console.log(error);
                process.exit(1)
            })
        }
        else
        {
            process.exit(1)
        }
    })
}

main();
process.on("SIGTERM", () =>
{
    console.log("SIGTERM is received!");
    if (server)
    {
        server.close();
    }
})

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