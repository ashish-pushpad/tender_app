import express from "express" ;
import bodyParser from "body-parser";
import userRouter from "./routers/user_router.js";
import categoryRouter from "./routers/category_router.js";
import cors from "cors";
const app= express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use("/user",userRouter);
app.use("/category",categoryRouter)
app.listen(3001);
console.log("server is ready on 3001");