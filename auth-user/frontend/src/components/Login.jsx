import React from "react";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen ">
      <form className=" flex flex-col gap-4 border p-8 w-[400px] shadow-lg">
        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Enter your email </label>
          <input
            type="text"
            placeholder="adarsh@gmail.com"
            className="border  rounded-sm"
          ></input>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-lg font-medium">Passwrod </label>
          <input
            type="text"
            placeholder="adarsh0909"
            className="border  rounded-sm"
          ></input>
        </div>
        <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 mt-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
