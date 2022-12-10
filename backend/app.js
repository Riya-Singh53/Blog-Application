import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";

import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose.
    connect(
        "mongodb+srv://toorr:Elv0XyZPS78CG71y@cluster0.4aokso4.mongodb.net/?retryWrites=true&w=majority"
    ).then(() => app.listen(3000))
    .then(()=>
        console.log("Connected to Database and Listening to local host 3000 ")
    )
    .catch((err)=>console.log(err));





//password MongoDB toorr =  Elv0XyZPS78CG71y
// http://127.0.0.1:3000