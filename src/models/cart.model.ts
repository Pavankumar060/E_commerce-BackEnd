import mongoose from "mongoose";

const cartSchema = new mongoose.Schema({
    cartId:{
      type:String,
      require:true  
    },
   products:[{ 
        _id:{
            type:String,
            require:true
        },
        title: {
            type: String,
            require:true
        },
        price:{
            type: Number,
            require:true
        },
        userQuantity:{
            type:Number,
            require:true 
        }
    }]
})

const cartModel =mongoose.model('cart',cartSchema);

export default cartModel;