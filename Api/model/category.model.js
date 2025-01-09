import mongoose  from "mongoose";
import uniquevalidator from "mongoose-unique-validator";

const categorySchema= mongoose.Schema({
    _id:Number,
    c_name: {
    type:String,
    unique:true,
    require:[true,"category name is require"],
    trim:true,
    lowercase:true
    },
    cicon_name:{
        trim:true,
        require:[true,"category name is require "],
        type:String
    }
});
categorySchema.plugin(uniquevalidator);
const categorySchemaModel=mongoose.model("category_collection",categorySchema);
export default categorySchemaModel; 