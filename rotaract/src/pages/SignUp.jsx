import React from "react";
import { Navbar } from "../components";

function SignUp() {
  return (
    <div>
      <div className="gradient_bg">
        <Navbar />
      </div>
      <div className="flex justify-center h-screen pt-10">
        <div className="w-full max-w-[400px] ">
          <form className="">
            <div className="flex justify-center mb-4">
              <h1 className="m-auto text-4xl font-bold">Hello!!!</h1>
            </div>

            <div className="mb-4">
              <input
                className="w-full h-12 px-4 py-2 leading-tight text-gray-500 bg-gray-200 border border-gray-300 shadow appearance-none border-1 rounded-3xl focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full h-12 px-4 py-2 leading-tight text-gray-500 bg-gray-200 border border-gray-300 shadow appearance-none border-1 rounded-3xl focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <input
                className="w-full h-12 px-4 py-2 leading-tight text-gray-500 bg-gray-200 border border-gray-300 shadow appearance-none border-1 rounded-3xl focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Password"
              />
            </div>
            <div className="mb-6">
              <input
                className="w-full h-12 px-3 py-2 leading-tight text-gray-500 bg-gray-200 border border-gray-300 shadow appearance-none border-1 rounded-3xl focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Re Password"
              />
            </div>
            <div className="flex justify-center">
              <button
                className="w-40 h-12 px-4 py-2 font-bold text-white bg-orange-600 hover:bg-orange-700 rounded-3xl focus:outline-none focus:shadow-outline "
                type="button"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
