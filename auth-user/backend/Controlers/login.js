import jwt from "jsonwebtoken";
import { User } from "../Models/user.js";
import bcrypt from "bcrypt";

export const login = async(req , res) =>{
    try {
        const {email , password} = req.body;
        if (!email || !password){
            return res.status(400).json({
                message : "email and password are missing",
                success : false
            })
        }
        const user = await User.findOne({email});
        if (!user){
            return res.status(404).json({
                message : "User not exist",
                success : false
            })
        }

        const comparePassword = await bcrypt.compare(password , user.password);
        const token = jwt.sign({id:user._id} , process.env.SECRET , {expiresIn : "1h"});
        if (!comparePassword){
            return res.status(404).json({
                message : "Password is invalid",
                success : false
            })
        }
        return res.status(201).json({
            message: "Login Successfully",
            token, 
            success: true,
          });

    } catch (error) {
        console.log(error);
        
        return res.status(400).json({
            message : "Something went wrong",
            success : false
        })
    }
}