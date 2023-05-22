import React, { useState } from "react";
import OtpInput from "react-otp-input";

const OTP = () => {
  const [otp, setOtp] = useState();
  return (
    <div className="container w-[350px] sm:w-[450px] h-[550px] flex flex-col  gap-10">
      <h1 className="text-white font-bold text-4xl">Enter OTP</h1>
      <form
        action=""
        className="relative flex items-center w-full flex-col gap-10 px-6"
      >
        <div className="inputBox flex justify-center relative m-[30px 0] w-full">
          {/* <input
            type="email"
            className="w-full h-[40px] text-xl text-white p-[0 5px] bg-transparent border-none outline-none"
            required
          />
          <label
            for=""
            className="absolute top-[50%] left-[5px] translate-y-[-50%] text-white pointer-events-none duration-500"
          >
            Email
          </label> */}
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input {...props} />}
            inputStyle={{
                width: "75px",
                height:"75px",
                border:"1px solid #fff",
                background:"transparent",
                fontSize:"2.4rem",
                color:"#fff"
            }}
          />
        </div>
        <button
          type="submit"
          className="relative w-[90%] h-[40px] bg-[#f4157e] text-xl text-white border-none outline-none rounded-3xl"
        >
          Verify OTP
        </button>
      </form>
    </div>
  );
};

export default OTP;
