import "../model/connection.js";
import categorySchemaModel from "../model/category.model.js";
import url from "url";

export const save = async(req,res)=>{
    const c_data= await categorySchemaModel.find();
    var length =c_data.length;
    var _id=length==0?1:c_data[length-1]._id+1;
    try{
  const category_request={...req.body,"_id":_id};
  const new_cato=await categorySchemaModel.create(category_request);
  console.log(new_cato);
  res.status(200).json("category insert");
}
catch{
  res.status(500).json("internal server error");
}
}

export const fetch=async (req,res)=>{
  var c_input=url.parse(req.url,true).query.condition_obj;
  console.log(c_input);
  if(c_input!=undefined)
    c_input=JSON.parse(c_input);
  else
   c_input={};
   const c_data=await categorySchemaModel.find(c_input);
  // console.log(c_data);
   if(c_data.length!=0)
    res.status(200).json(c_data);
  else
  res.status(404).json('data not found');
}

export const cate_delete=async(req,res)=>{
const c_input=await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
if(c_input){
const c_data =await categorySchemaModel.deleteOne(JSON.parse(req.body.condition_obj));
console.log(c_data);
if(c_data)
  res.status(200).json("data delete successfully")

else
res.status(500).json("internal server error");
}
else
res.status(404).json("data not found");
}

export const update=async (req,res)=>{
const c_input =await categorySchemaModel.findOne(JSON.parse(req.body.condition_obj));
if(c_input){
const update=await categorySchemaModel.updateOne(JSON.parse(req.body.condition_obj),{$set:JSON.parse(req.body.update_obj)});
if(update)
  res.status(201).json("updata data successfully");
else
res.status(500).json("internal error");
}
else
res.status(404).json("data not found");
}