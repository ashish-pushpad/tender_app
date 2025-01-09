import "../model/connection.js";// connect with database 
import userScemamodel from "../model/user.model.js";// import the model from model.js that is blue print of the database what will save in database
import jsonwt from "jsonwebtoken"; // it will genrate a toke with user data and randome string
import rs from "randomstring";
import url from "url" ;    
export const save= async (req,res)=>{
  // console.log("this is save");
  try { 
  var userlist= await userScemamodel.find(); // get blue print from the imported file 
    var length=userlist.length;
    var _id=length==0?1:userlist[length-1]._id+1//update userlist's id plus one 
        const userdetails = { ...req.body,"_id":_id,"role":"user","status":0,"info":Date()}
        await userScemamodel.create(userdetails);
        res.status(201).json({"status":true});
    } catch (error) {
        console.log(error.message);
        res.status(500).json({"status":false});
    }
}

export const login= async (req,res)=>{
   const user_input ={...req.body,"status":1};
   const userdata=await userScemamodel.find(user_input);
   if(userdata.length!=0){
    const payload = userdata[0].email ;
    const key=rs.generate[50];
    const token = jsonwt.sign(payload,key);
    res.status(200).json({"token":token,"userdetails":userdata[0]});
   }
   else{
     res.status(500).json({"status":"error"});
   }
}

export const fatch =async(req,res)=>{
 let user_input= url.parse(req.url,true).query.condition_obj;
 console.log(user_input);
 if(user_input!=undefined){
    user_input=JSON.parse(user_input);//_id:2
   console.log(user_input);
 }
else
  user_input={} ;
 let user_data= await userScemamodel.find(user_input);//
 if(user_data){
   res.status(200).json(user_data);
 }
 else
 res.status(404).json("data not found");
}

export const deletedata= async (req,res)=>{
  try{
   const user_input =await userScemamodel.findOne(JSON.parse(req.body.condition_obj));
   if(user_input){
    let delete_data=await userScemamodel.deleteOne(JSON.parse(req.body.condition_obj));
    if(delete_data){
      res.status(200).json("data deleted successfully")
    }
    else{
      res.status(500).json("server Error")
    }
   }
   else{
    console.log("data not found");
   }
  }
  catch(error){
    console.log(error);
  }
}