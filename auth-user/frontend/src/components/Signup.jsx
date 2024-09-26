import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import axios from "axios"; // Import Axios
import { Link } from "react-router-dom";
import { handleError, handleSucess } from "../utils"; // Import your toast utilities

const Signup = () => {
  const [loginDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleName = (e) => {
    const { name, value } = e.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = loginDetails;
  
    if (!name || !email || !password) {
      return handleError("Please fill all the fields");
    }
    
    
  
    try {
      const response = await axios.post(`http://localhost:4000/api/signup`, {
        name,
        email,
        password,
      });
      
  
      if (response.data.success) {
        handleSucess("Signup successful!");
        setLoginDetails({
          name: "",
          email: "",
          password: "",
        });
      } else {
        handleError(response.data.message || "Signup failed");
      }
    } catch (error) {
      handleError(error.response?.data?.message || "Something went wrong during signup");
    }
  };
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col gap-4 bg-white border p-8 shadow-lg w-[400px]">
        <h1 className="text-xl">Signup</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
          <div className="flex flex-col">
            <label className="text-lg">Name</label>
            <input
              onChange={handleName}
              name="name"
              value={loginDetails.name}
              type="text"
              placeholder="Adarsh Kumar"
              className="border rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Email</label>
            <input
              onChange={handleName}
              name="email"
              value={loginDetails.email}
              type="email"
              placeholder="something@gmail.com"
              className="border rounded-sm p-2"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-lg">Password</label>
            <input
              onChange={handleName}
              name="password"
              value={loginDetails.password}
              type="password"
              placeholder="ad@0909"
              className="border rounded-sm p-2"
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 px-4 py-2 text-white text-lg">
            Submit
          </button>
          <span>
            Already have an account?{" "}
            <Link className="hover:underline text-blue-500 hover:text-blue-800"  >
              login
            </Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Signup;
