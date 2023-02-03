import express from "express";
import authService from "../config/auth";
import productController from "../controllers/products.controller";

const productRoutes = express.Router();
productRoutes.get('/loadProducts',authService.Tokenverify,productController.getProductController)
productRoutes.post('/addProduct',authService.Tokenverify,productController.addProductController)
productRoutes.put('/updateProduct/:productId',authService.Tokenverify,productController.updateProductController)
productRoutes.delete('/deleteProduct/:productId',authService.Tokenverify,productController.deleteProductController)

export default productRoutes;