import React from "react";
import Image from "next/image";
import profile from "../../images/user.png";
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting, AiOutlineFileText } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { AiOutlineProject } from "react-icons/ai";
import { GrCertificate } from "react-icons/gr";
import { BiMenuAltRight } from "react-icons/bi";
import ProjectCard from "./ProjectCard";
import {tempData} from "../../app/student/profile/data";
import ProjectCardComp from "../ProjectCardComp";

const Dashboard = () => {
  return (
    <div className="h-screen w-full overflow-scroll pb-6">
      {/* Header and menu start */}
      <div className="nav w-full h-[100px] flex items-center justify-between px-12">
        {/* Dashboard heading */}
        <h1 className="text-4xl font-medium flex items-center"> Dashboard</h1>
        <div className="rightside w-[50%] flex justify-between items-center">
          {/* search bar start*/}
          <div className="search w-[80%] h-[45px] flex items-center rounded-2xl border-zinc-500 bg-[#ffffff] pr-5">
            <label className="relative w-full h-full rounded-2xl">
              <BsSearch className="absolute left-3 inset-y-3 text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full px-10 rounded-2xl bg-transparent"
              />
            </label>
            <button
              style={{
                borderLeft: "1px solid rgb(107 114 128)",
                paddingLeft: "5px",
              }}
            >
              <GoSettings className="text-xl text-gray-500" />
            </button>
          </div>
          {/* search bar end */}
          {/* menu end */}
          <div className="menu flex gap-4">
            <button>
              <IoMdNotificationsOutline className="text-3xl text-gray-600" />
            </button>
            <button>
              <AiOutlineSetting className="text-3xl text-gray-600" />
            </button>
          </div>
          {/* menu end  */}
        </div>
      </div>
      {/* Header and menu end */}
      {/* Dashboard body start */}
      <div className="maincontainer flex w-full flex-col gap-4 px-12">
        <div className="upperContainer w-full grow flex gap-6 flex-wrap-reverse">
          <div className="leftContainer min-w-[50%] flex flex-col gap-6 grow">
            <div className="dataContainer w-full flex gap-6 flex-wrap justify-evenly grow">
              <div className="projectData w-[200px] sm:w-[280px] h-[120px] bg-[#eac0e388] border-[#DC0DBB] border-solid border rounded-2xl flex flex-col justify-between">
                <div className="projectupData flex items-center justify-evenly h-full">
                  <AiOutlineProject className="text-5xl" />
                  <div className="dataText">
                    <h2 className="font-semibold text-4xl md:text-3xl">9</h2>
                    <h2 className="text-xl font-medium">Total Project</h2>
                  </div>
                </div>
                <div className="projectDownData flex items-center justify-between px-5 border-[#DC0DBB] border-solid border-t cursor-pointer">
                  <h2>See Details</h2>
                  <BsArrowRight className="text-[#DC0DBB]" />
                </div>
              </div>
              <div className="certificateData w-[280px] h-[120px] bg-[#a4e8bb8f] border-[#0DDC53] border-solid border rounded-2xl flex flex-col justify-between">
                <div className="certificateupData flex items-center justify-evenly h-full">
                  <GrCertificate className="text-5xl" />
                  <div className="dataText text-left">
                    <h2 className="font-semibold text-4xl">12</h2>
                    <h2 className="text-xl font-medium text-left">
                      Total Achievements
                    </h2>
                  </div>
                </div>
                <div className="certificateDownData flex items-center justify-between px-5 border-[#0DDC53] border-solid border-t cursor-pointer">
                  <h2>See Details</h2>
                  <BsArrowRight className="text-[#0DDC53]" />
                </div>
              </div>
            </div>
            <div className="graphContainer w-full h-[260px] shadow-xl bg-white rounded-2xl"></div>
            <div className="projectContainer w-full h-[260px] shadow-xl bg-white rounded-2xl px-4">
              <h1 className="text-4xl font-semibold text-center border-b border-b-[#2f56c157] py-1">
                Amcat Details
              </h1>
            </div>
          </div>
          <div className="rightContainer w-[40%] grow h-full flex flex-col gap-6">
            <div className="aboutProfile flex items-end min-w-full h-[450px] rounded-2xl">
              <div className="aboutprofileBox relative flex justify-center min-w-full h-[380px] shadow-xl bg-[linear-gradient(#3964dadb,#2F57C1)] rounded-2xl">
                <Image
                  src={profile}
                  alt=""
                  className="h-[200px] w-[200px] rounded-full translate-y-[-70px]"
                />
              </div>
            </div>
            <div className="aboutskill w-full h-[200px] shadow-xl bg-white rounded-2xl grow">
              <h1 className="text-3xl pt-2 font-medium text-center border-b border-b-black">
                Skills
              </h1>
            </div>
          </div>
        </div>
        <div className="projectContainer w-full min-h-[360px] shadow-xl bg-white rounded-2xl px-4">
              <h1 className="text-4xl font-semibold text-center border-b border-b-[#2f56c157] py-1">
                Projects
              </h1>
              <div className="projectBox min-h-full w-full overflow-hidden flex flex-col gap-4">
                <ProjectCard/>
                <ProjectCard/>
              </div>
            </div>
        <div className="certificateContainer w-full p-3 shadow-xl bg-white rounded-xl">
          <h1 className="text-4xl font-medium text-center border-b border-b-black">
            Certificate
          </h1>
          <div className="certificateBox w-full min-h-fit flex items-center justify-center flex-wrap gap-3 mt-5">
            <div className="certificate w-40 border-stone-900 border-solid border p-3 rounded-lg">
              <h1 className="text-xl text-center">Certificate</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapi
              </p>
            </div>
            <div className="certificate w-40 border-stone-900 border-solid border p-3 rounded-lg">
              <h1 className="text-xl text-center">Certificate</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapi
              </p>
            </div>
            <div className="certificate w-40 border-stone-900 border-solid border p-3 rounded-lg">
              <h1 className="text-xl text-center">Certificate</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapi
              </p>
            </div>
            <div className="certificate w-40 border-stone-900 border-solid border p-3 rounded-lg">
              <h1 className="text-xl text-center">Certificate</h1>
              <p className="text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
                posuere cubilia Curae; Nulla mollis dapi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;


