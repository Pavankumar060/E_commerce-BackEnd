//  request to DB and others &  responses from DB & server


import { Request, Response } from "express";
import userService from "../services/users.services";


const userRegistrationController = async( req:Request, res :Response)=>{
//  console.log("In controller",req.body);
    userService.userRegistrationService(req.body).then((result)=>{
        // console.log(result); 
        res.status(200).send({message:"User created successfully"})
    }).catch((error)=>{    
        if (error?.code === 11000){
            res.status(505).send({message:"email exists already"})
        }else{
        res.status(500).send({message:"Unable to create User"})
    }
})
}

const userLoginController = async( req: Request , res: Response)=>{
//   console.log(req.body);
    userService.userLoginService(req.body).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })  
    }
    
const userUpdateController = async(req:Request,res:Response)=>{
    console.log(req.params.userId);
    userService.userUpdateService(req.params.userId,req.body).then((result)=>{
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    })
}


const usersController = {
    userRegistrationController:userRegistrationController,
    userLoginController:userLoginController,
    userUpdateController:userUpdateController
}
export default usersController;