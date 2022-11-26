import React from "react";
import { Navbar } from "../components";

function LogIn() {
  return (
    <div>
      <div className="gradient_bg">
        <Navbar />
      </div>
      <div className="flex justify-center h-screen pt-10 gradient_bg">
        <div className="w-full max-w-[400px] h-[300px] mt-[100px]">
          <form className="">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded-3xl h-12 w-full py-2 px-4 text-white leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r from-[#411d1d] to-[#5e4848] "
                id="username"
                type="text"
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded-3xl h-12 w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gradient-to-r from-[#411d1d] to-[#5e4848] "
                id="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button
              className="w-full h-12 px-4 py-2 font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-3xl focus:outline-none focus:shadow-outline "
              type="button"
            >
              Sign In
            </button>
            <a
              className="flex justify-end mt-2 text-sm font-bold text-gray-200 align-baseline hover:text-blue-800"
              href="#"
            >
              Forgot Password?
            </a>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LogIn;
