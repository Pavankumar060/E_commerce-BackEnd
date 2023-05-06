//connection to mongoDB

import * as mongoose from 'mongoose';

mongoose.set('strictQuery',true);

// database connection

export default (async()=>{

    try{
        await mongoose.connect('mongodb+srv://ypavankumar:Pavan%40060@e-commerce.uv2fp3z.mongodb.net/E-commerce?retryWrites=true&w=majority');
            console.log("connected to MONGO DB");
            
    } catch(err){
        console.log(`${err} could connect to DB !! Exiting Now!!!!`);
        process.exit();}
})();