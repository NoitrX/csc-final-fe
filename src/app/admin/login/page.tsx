import React from "react";

function LoginPage() {
  return (
    <div className="max-w-screen min-h-screen flex justify-center items-center m-auto font-poppins">
      <div className="border border-gray-300 rounded-xl  flex flex-col justify-center items-center p-20">
        <h1 className="text-xl font-bold">LOGIN </h1>
        <h2 className="text-3xl font-semibold text-center">Welcome To CMS CSC</h2>
        <p className="text-gray-400 text-center text-sm">
          Glad to see you again 👋 <br /> Login to your account below
        </p>
        <form action="" className="w-full mt-2 text-sm">
          <div className="w-full mt-2">
            <label htmlFor="" className="font-bold">
              Email
            </label>
            <input type="text" className="w-full px-2 py-2 border border-gray-400 rounded-md" placeholder="enter email.." name="email" />
          </div>

          <div className="w-full mt-4 text-sm">
            <label htmlFor="" className="font-bold">
              Password
            </label>
            <input type="text" className="w-full px-2 py-2 border border-gray-400 rounded-md" placeholder="enter password.." name="email" />
          </div>

          <div className="w-full mt-6 text-sm">
            <button className="w-full bg-primary py-2 text-white font-bold tracking-[1px] hover:bg-blue-700 transition-all duration-200">LOGIN</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
