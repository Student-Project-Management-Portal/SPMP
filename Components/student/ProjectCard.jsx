import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { MdVerified } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";

const ProjectCard = (props) => {
  return (
    <div className=" w-full flex flex-col border-b border-b-[#2f56c157] py-2 gap-2">
      <div className="upContainer flex flex-wrap gap-4 justify-between px-5">
        <div className="left">
          <h1 className="font-semibold text-xl">Student Project Management</h1>
          <div className="links flex gap-3 text-3xl">
            <a href="" className="hover:text-blue-500">
              <TbWorldWww />
            </a>
            <a href="" className="hover:text-blue-500">
              <AiFillGithub />
            </a>
          </div>
          <div className="techStack flex items-center gap-2">
            <h1 className="font-medium">TechStack:</h1>
            <p>Next.js , Tailwind CSS , Node.js</p>
          </div>
        </div>
        <div className="right w-[300px] border-l border-l-[#2f56c157] px-5">
          <h1 className="text-xl font-medium">Team Details</h1>
          <li className="flex items-center justify-between">
            Abhishek Singhal{" "}
            <a href="http://" className="text-blue-500 hover:text-blue-300">
              View Profile
            </a>
          </li>
          <li className="flex items-center justify-between">
            Abhinav Yadav{" "}
            <a href="http://" className="text-blue-500 hover:text-blue-300">
              View Profile
            </a>
          </li>
          <li className="flex items-center justify-between">
            Dev Chauhan{" "}
            <a href="http://" className="text-blue-500 hover:text-blue-300">
              View Profile
            </a>
          </li>
        </div>
      </div>
      <div className="downContainer px-5 min-w-full flex gap-7 justify-evenly">
        <a href="http://" className="flex items-center text-lg font-medium gap-2">
          View Presentation <MdVerified className="text-blue-600" />
        </a>
        <a href="http://" className="flex items-center text-lg font-medium gap-2">
          View Synopsis <RxCrossCircled />{" "}
        </a>
        <a href="http://" className="flex items-center text-lg font-medium gap-2" >
          View Final Report <RxCrossCircled />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
