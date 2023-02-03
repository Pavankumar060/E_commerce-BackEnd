import mongoose from "mongoose";

const productsSchema = new mongoose.Schema({
    id:{
        type: Number,
        require:true,
        unique:true
    },
    title: {
        type: String,
        require:true
    },
    description:{
        type: String,
        require:true
    },
    price:{
        type: Number,
        require:true
    },
    rating:{
        type: Number,
        require:true
    },
    stock:{
        type: Number,
        require:true
    },
    brand:{
        type: String,
        require:true
    },
    category: {
        type: String,
        require:true
    },
    thumbnail: {
        type:String
    },
    images:{
        type:Array
    } 
    })

const productModel = mongoose.model('products',productsSchema);

export default productModel;