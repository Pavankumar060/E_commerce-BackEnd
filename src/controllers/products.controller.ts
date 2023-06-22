import { Request, Response } from "express";
import productService from "../services/products.services";

const addProductController = async(req:Request,res:Response)=>{    
    productService.addProductService(req.body).then((result)=>{
    res.status(200).send(result)
    
}).catch((error)=>{
    if (error?.code === 11000){
        res.status(505).send({message:"Product exists already"})
    }else{
    res.status(506).send(error)
    }
})
    
}
const getProductController = async (req:Request,res:Response)=>{
   
     let filter:any ={}; 
   
    if (req.query.search){
        filter = req.query.search;
    }
    productService.getProductsService(filter).then((results)=>{
        
        res.status(200).send(results)
    }).catch((error)=>{
        res.status(505).send(error)
    })
}
const updateProductController = async(req:Request,res:Response)=>{
    productService.updateProductService(req.params.productId,req.body).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(402).send(err)
    })
}

const deleteProductController = async(req:Request,res:Response)=>{
    productService.deleteProductService(req.params.productId,).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(402).send(err)
    })
}

const productController={
   addProductController:addProductController,
   getProductController:getProductController,
   updateProductController:updateProductController,
   deleteProductController:deleteProductController 
}

export default productController;