//connection to mongoDB

import * as mongoose from 'mongoose';

mongoose.set('strictQuery',true);

// database connection

export default (async()=>{

    try{
        await mongoose.connect(
            'mongodb://127.0.0.1:27017/Ecommerce?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.6.2');
            console.log("connected to MONGO DB");
            
    } catch(err){
        console.log(`${err} could connect to DB !! Exiting Now!!!!`);
        process.exit();}
})();