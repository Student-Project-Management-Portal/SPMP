"use client";
import React, { useState } from "react";
import Image from "next/image";
import miet from "../../images/MIET_Logo.png";
import profile from "../../images/user.png";
import { TbLayoutDashboard, TbFileCertificate } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import "../../styles/student/profile.scss";

const Sidemenu = () => {
  const [menuopen, setMenuOpen] = useState(false);
  const handleClick = () => {
    setMenuOpen(!menuopen);
  };
  return (
    <div
      id="sidemenu"
      className={`h-screen duration-75 ease-in-out w-[${
        menuopen ? "100px" : "200px "
      }] text-white bg-[linear-gradient(#3964dadb,#2F57C1)] rounded-r-[35px] p-8`}
    >
      <div className="upperContainer w-full flex items-center justify-evenly flex-col gap-6 ">
        <div className="img w-full h-[100px] flex items-center justify-evenly">
          {menuopen ? null : <h1 className="text-3xl font-medium ">SPMP</h1>}
          {menuopen ? null : (
            <Image src={miet} className="w-[100px] h-[50px]" />
          )}
          {menuopen ? (
            <AiOutlineMenuUnfold className="text-3xl" onClick={handleClick} />
          ) : (
            <AiOutlineMenuFold className="text-3xl" onClick={handleClick} />
          )}
        </div>
        <div className="details w-full h-full flex flex-col gap-3">
          <div className={`name   rounded-[35px] flex items-center gap-3 h-[60px] ${menuopen ?"px-0 border-none bg-transparent":"px-3 border bg-[#ebebeb21]"}`}>
            <Image className="h-[40px] w-[40px] rounded-full" src={profile} />
            {menuopen ? null : <h1 className="text-xl">Hey, Dev</h1>}
          </div>
          <div className="details2 w-full px-3 text-sm">
            {menuopen ? null : <p>Computer Science & Information Technology</p>}
            {menuopen ? null : <p>Student</p>}
          </div>
        </div>
      </div>
      <div className="menuContainer flex items-center flex-col gap-4 py-[10px] min-h-[350px] grow">
        <div className="list flex items-center gap-2 w-full text-base h-[50px] rounded-xl cursor-pointer hover:bg-[#060a1b2b]">
          <TbLayoutDashboard className="text-3xl" />
          {menuopen ? null : <p className="text-lg">DASHBOARD</p>}
          
        </div>
        <div className={`list flex items-center gap-2 w-full  text-base h-[50px] rounded-xl cursor-pointer hover:bg-[#060a1b2b]`}>
          <GiNotebook className="text-3xl" />
          {menuopen ? null : <p className="text-lg">PROJECTS</p>}
        </div>
        <div className="list flex items-center gap-2 w-full text-base h-[50px] rounded-xl cursor-pointer hover:bg-[#060a1b2b]">
          <TbFileCertificate className="text-3xl" />
          {menuopen ? null : <p className="text-lg">CERTIFICATES</p>}
          
        </div>
      </div>
      <div className="footerContainer w-full">
        <div className="list flex mt-4 items-center gap-2 w-full text-base h-[50px] rounded-xl cursor-pointer hover:bg-[#060a1b2b]">
          <BiSupport className="text-3xl" />
          {menuopen ? null : <p className="text-lg">Get Help</p>}
          
        </div>
      </div>
    </div>
  );
};

export default Sidemenu;
