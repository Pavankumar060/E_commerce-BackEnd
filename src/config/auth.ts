import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import APP_CONFIGS from "./configs";

const Tokenverify = (req: Request,res:Response,next:any)=>{
    const authToken: any = req.headers['x-authorization'];
    if(!authToken){
        res.status(401).send({message:"Authentication Failed"})
    }else{
        const token = jwt.verify(authToken,APP_CONFIGS.tokenAuthKey,(err: any,result: any)=>{
            if (err){
                res.status(403).send({message:"Unauthorised User"})
            }else{
                next();
            }
        });
}
    }
    
const authService={
    Tokenverify:Tokenverify
}
export default authService;