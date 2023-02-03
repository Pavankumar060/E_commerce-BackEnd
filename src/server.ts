/*
THIS is to start server and deploy user routes
*/


import cors from 'cors';
import express from'express'
import './config/db'
import cartRoutes from './routes/cart.routes';
import productRoutes from './routes/products.routes';
// import { Response, Request } from "express";
import userRoutes from './routes/users.routes';



const app = express();
const PORT = 4000;
const API_VER = '/api/v1';
app.use(express.json());
app.use(cors());
app.options('*',cors());

app.use(API_VER + '/users',userRoutes);

app.use(API_VER+ '/products',productRoutes);

app.use(API_VER+'/cart',cartRoutes);
app.listen(PORT,()=>{
    console.log('server started at 4000 port');    
})



