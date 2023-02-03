import { Request, Response } from "express";
import cartService from "../services/cart.service"



const addtoCartController = async(req:Request,res:Response)=>{

    cartService.addToCartService(req.params.cartId,req.body).then
    ((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(500).send(error);
    })
}

const getFromCartController = async(req:Request,res:Response)=>{
    //  console.log(req.params);
    const cartId:string= req.params.cartId ? req.params.cartId.toString() : ''; 
    cartService.getFromCartService(cartId).then
    ((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(500).send(error);
    })
}


const removeFromCartController = async(req:Request,res:Response)=>{
    // console.log(req.body._id);
    const cartId = req.params.cartId;
    const productId = req.params.productId;
    
    cartService.removeFromCartService(cartId,productId).then
    ((result)=>{
        res.status(200).send(result);
    }).catch((error)=>{
        res.status(500).send(error);
    })
}

const cartController ={
    addtoCartController:addtoCartController,
    removeFromCartController:removeFromCartController,
    getFromCartController:getFromCartController
}
export default cartController;