import productModel from "../models/products.model"

const getProductsService = async(filter?:any)=>{

    return new Promise(async(resolve,reject)=>{
        // console.log("in get service");
        
        try {
            if(typeof filter=== 'string'){
                filter = JSON.parse(filter);
            }
            // console.log(filter);
            
            const products = await productModel.find(filter);
                resolve(products);
            console.log(products);        
        }catch(err){
            console.log(err);
            
            reject({message:"unable to get products"})
        }
    })
}

const addProductService = async(productData:any)=>{

    return new Promise (async(resolve,reject)=>{
        try{
            // const newProduct = new productModel(productData);
            const result = await productModel.insertMany(productData);
            // console.log(result,"in service");   
            resolve({message:"product added successfully"})
        }catch(error){
            reject({message:"unable to add product"});
        }
    })
}

const updateProductService= async(productId:String,updateData:any)=>{

    return new Promise(async(resolve,reject)=>{
        try{
           const result = await productModel.updateOne({_id:productId},updateData);
            resolve({message:"product updated successfully"})
        }catch(err){
            reject({message:"unable to update product details"})

        }
    })
}

const deleteProductService = async(productId:String)=>{

    return new Promise(async(resolve,reject)=>{
        try{
            const result = await productModel.deleteOne({_id:productId});
            resolve({message:"product deleted successfully"})
        }catch(err){
            reject({message:"unable to update product details"})
        }
    })
}

const productService= {
    addProductService: addProductService,
    getProductsService:getProductsService,
    updateProductService:updateProductService,
    deleteProductService:deleteProductService
}

export default productService;