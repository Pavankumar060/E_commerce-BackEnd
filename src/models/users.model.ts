// database model(schema)

import mongoose from "mongoose";


// preparing schema for users
const usersSchema = new mongoose.Schema({
   
    username:{
        type: String,
        require: true,
    },
    email:{
        type: String,
        require:true,
        match :/^([A-Za-z0-9_\-\.])+\@([A-za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    cartId:{
        type:String,
        require:true,
        unique:true
    }
});

const userModel = mongoose.model('Users',usersSchema);

export default userModel;