//import "../model/connection.js";
import express from "express";
import * as userControler from "../controller/user_controler.js"
const router =express.Router();
// console.log("this is router");
router.post("/save",userControler.save);
router.post("/login",userControler.login)
router.get("/fetch",userControler.fatch);
export default router ;

