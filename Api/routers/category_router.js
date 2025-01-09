import * as categoryschemamodel from "../controller/category.controlerl.js";
import express from "express";
const app= express.Router();
app.post("/save",categoryschemamodel.save);
app.get("/fatch",categoryschemamodel.fetch);
app.delete("/delete",categoryschemamodel.cate_delete);
app.patch("/update",categoryschemamodel.update);
export default app;
