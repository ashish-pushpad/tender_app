import mongoose from "mongoose";
const url="mongodb://localhost:27017/Project_App";
mongoose.connect(url);
console.log("connection with database is ready") ;