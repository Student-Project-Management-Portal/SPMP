"use client";
// import Login from "@/Components/Login";
// import SignUp from "@/Components/SignUp";
import React, { useState } from "react";
import { useAnimate } from "framer-motion"
// import OTP from "@/Components/OTP";

function page() {
  //   const [showLogin, setShowLogin] = useState(true);
  const [scope, animate] = useAnimate()


  const handleClick = () => {
   
  };
  return (
    <div className="container w-[350px] sm:w-[450px] h-[550px] flex flex-col gap-4">
      <div className="box w-[95%]">
          {/* <Login />
          <SignUp /> */}
          
      </div>
      <div>
        <p>Don't have an account? <span>SignUp</span></p>
        <p>Already have an account? <span >Login</span></p>
      </div>
      <button >test</button>
    </div>
    // <OTP/>
  );
}

export default page;
