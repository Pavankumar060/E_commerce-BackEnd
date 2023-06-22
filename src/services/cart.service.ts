
import cartModel from "../models/cart.model"

const addToCartService=async(cartId: string,productList : any)=>{

    return new Promise (async(resolve,reject)=>{
        try{
            const result = await cartModel.find({cartId:cartId});
            if(result.length>0 ){
                const data = result[0].products;
                const isProductExist = data.find((prd)=> prd._id === productList._id);
                if(isProductExist){
                    const updatedQuantity = isProductExist.userQuantity + productList.userQuantity;
                    productList.userQuantity = updatedQuantity;
                        await cartModel.updateOne({cartId:cartId},{$pull:{products:{_id:productList._id}}});
                        await cartModel.updateOne({cartId:cartId},{$push:{products:productList}});
                }else{
                     await cartModel.updateMany({cartId:cartId},{$push:{products:productList}});
                }

            }else{
            const newcartData = new cartModel();
                newcartData.cartId = cartId;
                newcartData.products.push(productList);
            await newcartData.save();
            }
        resolve({message:"product added successfully"})
        }catch(error){
            reject(error);

        }
    })

}

const getFromCartService = async( cartId :string)=>{
  return  new Promise(async(resolve,reject)=>{
        try {
            const results = await cartModel.find({cartId:cartId});
            // console.log(results);
            
            if(results.length>0){
                
           resolve(results);
           
            }else{
                reject({message:"no products in the cart"});
            }
        } catch (error) {
            reject({message:"unable to fetch products from cart"})
        }
    })
}

const removeFromCartService = async( cartId:string,productId:string)=> {
 
   return  new Promise (async(resolve,reject)=>{

        try {
                 await cartModel.updateOne({cartId:cartId},{$pull:{products:{_id:productId}}});        
            
                resolve({message:"product removed from cart"});
            
        } catch (error) {
            reject({message:"unable to delete product from cart"});
        }
    }
    )}

const cartService ={
    addToCartService:addToCartService,
    removeFromCartService:removeFromCartService,
    getFromCartService:getFromCartService
}

export default cartService;