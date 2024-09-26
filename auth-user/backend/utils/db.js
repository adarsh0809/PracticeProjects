import mongoose from "mongoose"

const connectDB = async () =>{
    await mongoose.connect(process.env.DB_URL , {
        dbName:"Auth-User",
    }).then(()=>{
        console.log("Connected to Database");
    }).catch(err =>{
        console.log(err);
    })
}

export default connectDB;