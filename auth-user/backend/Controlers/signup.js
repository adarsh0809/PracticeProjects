import { User } from "../Models/user.js";
import bcrypt from 'bcrypt';



export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email , password);
    
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    const isPresne = await User.findOne({ email });
    if (isPresne) {
      return res.status(400).json({
        message: "email already present",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password , 10);

    await User.create({
      name,
      email,
      password : hashedPassword
    });

    return res.status(201).json({
      message: "User Account created Successfuly",
      success: true,
    });
  } catch (error) {
    console.error("Error during signup:", error);
    return res.status(500).json({
      message: "Server error",
      success: false,
    });
  }
};
