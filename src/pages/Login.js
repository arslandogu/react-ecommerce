import React from "react";
import { BsGoogle, BsGithub } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";
function Login() {
  return (
      <div className="w-[80%] mx-auto grid grid-cols-2 py-20">
        <div className="flex gap-10 flex-col items-center justify-between">
          <div className="flex cursor-pointer hover:bg-black hover:text-white duration-300 rounded-xl flex-row items-center gap-x-4 border-[0.2em] p-4 font-titleFont font-semibold">
            <BsGoogle className="w-10 h-10" />
            <p>Sign in with Google</p>
            <button className="bg-gray-900 w-[40%] h-[50px] duration-300 hover:bg-gray-800 rounded-lg px-3 py-2 text-white border">
              Sign Out
            </button>
          </div>
        <div className="flex flex-col items-center justify-between">
          <div className="flex cursor-pointer hover:bg-black hover:text-white duration-300 rounded-xl flex-row items-center gap-x-4 border-[0.2em] p-4 font-titleFont font-semibold">
            <BsGithub className="w-10 h-10" />
            <p>Sign in with GitHub</p>
            <button className="bg-gray-900 w-[40%] h-[50px] duration-300 hover:bg-white rounded-lg px-3 py-2 text-white hover:text-black border">
              Sign Out
            </button>
          </div>
        </div>
        </div>
        <div className="flex items-center justify-center">
        <BsPersonCircle color="black" className="w-44 h-44" />
        </div>
      </div>
  );
}

export default Login;
