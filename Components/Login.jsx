import React from "react";

const Login = () => {
  return (
    <div className="relative flex items-center w-full h-full">
      <form
        action=""
        className="relative flex items-center w-full h-full flex-col gap-10 px-4"
      >
        <h1 className="text-white font-bold text-4xl">LOGIN</h1>
        <div className="inputBox relative m-[30px 0] w-full  border-b">
          <input
            type="email"
            className="w-full h-[40px] text-xl text-white p-[0 5px] bg-transparent border-none outline-none"
            required
          />
          <label
            for=""
            className="absolute top-[50%] left-[5px] translate-y-[-50%] text-white pointer-events-none duration-500"
          >
            Email
          </label>
        </div>
        <div className="inputBox relative m-[30px 0] border-b w-full">
          <input
            type="password"
            className="w-full h-[40px] text-xl text-white p-[0 5px] bg-transparent border-none outline-none"
            required
          />
          <label
            for=""
            className="absolute top-[50%] left-[5px] translate-y-[-50%] text-white pointer-events-none duration-500"
          >
            Password
          </label>
        </div>
        <button
          type="submit"
          className="relative w-full h-[40px] bg-[#f4157e] text-xl text-white border-none outline-none rounded-3xl"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
