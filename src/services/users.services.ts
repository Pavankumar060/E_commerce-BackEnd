// data base transactions and business logics
import { compare, hash } from "bcrypt";
import userModel from "../models/users.model"
import { v4 as uuidv4 } from 'uuid';
import  * as jwt from "jsonwebtoken";
import APP_CONFIGS from "../config/configs";

const userRegistrationService =async (userData:any) => { 
    return new Promise(async(resolve, reject)=>{

        const origin = userData.password
        userData.password = await hash(origin,5)
        userData.cartId = uuidv4();
    const newUser = new userModel(userData);
    try {
            const result = newUser.save();
            resolve(result);
        } catch (error) {
         console.log(error);
            reject(error);
        }
});
    
}

 const userLoginService = async (userLoginData :any) =>{    
     return new Promise(async (resolve ,reject)=>{
      const user: any = await userModel.find({email: userLoginData.email});  
              if(user.length>0){
                    const isPasswordverify :boolean = await compare(userLoginData.password,user[0].password)
                            if(isPasswordverify){

                            const token = jwt.sign({userId:user[0]._id},APP_CONFIGS.tokenAuthKey,{expiresIn:'2h'});

                            const userData ={
                                    userId : user[0]._id,
                                    userName: user[0].username,
                                    cartId : user[0].cartId,
                                    token : token
                            }
                                resolve(userData)
                            }else{
                                reject({message:"incorrect Password"})
                                }
                }else{
               reject({message:"emailId doesnt exist"})
                    }
  }
    )
 }

 const userUpdateService =async(userId:String, userUpdateData:any)=>{
   return new Promise(async(resolve,reject)=>{
    try{
        if(userUpdateData.password){
            const newPassword = userUpdateData.password;
            userUpdateData.password = await hash(newPassword,5);
        }
        const result = await userModel.updateOne({_id:userId},userUpdateData);
     resolve({message:"UserDetails updated successfully"})

        }catch(error){
                reject({message:"Unable to update userdetails"})
        }
   });
 }

const userService ={
    userRegistrationService:userRegistrationService,
    userLoginService:userLoginService,
    userUpdateService:userUpdateService
}
export default userService;