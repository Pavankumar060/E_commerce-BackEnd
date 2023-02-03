import express from "express";
import authService from "../config/auth";
import cartController from "../controllers/cart.controller";

const cartRoutes = express.Router();

cartRoutes.post('/addtoCart/:cartId',authService.Tokenverify,cartController.addtoCartController);

cartRoutes.get('/getProductsfromCart/:cartId',authService.Tokenverify,cartController.getFromCartController)

cartRoutes.delete('/deletefromCart/:cartId/:productId',authService.Tokenverify,cartController.removeFromCartController)

export default cartRoutes;