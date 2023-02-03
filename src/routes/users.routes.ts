// routes(links) for api

import express from "express";
import authService from "../config/auth";
// import { Response, Request } from "express";
import usersController from "../controllers/users.controllers";


const userRoutes = express.Router();

userRoutes.post('/register',usersController.userRegistrationController);
userRoutes.post('/login',usersController.userLoginController);
userRoutes.put('/update/:userId',authService.Tokenverify,usersController.userUpdateController)

export default userRoutes;