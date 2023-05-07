import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
import "../../styles/profile.scss";

const project = () => {
  return (
    <div id="project">
      <div className="upBox flex">
        <div className="leftBox">
          <h1 className="text-3xl">Project Name</h1>
          <div className="links text-2xl">
            <a href="#" >
              <AiFillGithub />
            </a>
            <a href="#">
              <TbWorldWww />
            </a>
          </div>
          <div className="techStack">
            <h4>TechStack:</h4>
            <p>HTML, CSS, JavaScript</p>
          </div>
        </div>
        <div className="teamBox">
          <h3 className="text-2xl">Team Details</h3>
          <div className="teamName">
            <h4>
              Teammate 1<a href="#">View Profile</a>
            </h4>
            <h4>
              Teammate 2<a href="#">View Profile</a>
            </h4>
            <h4>
              Teammate 3<a href="#">View Profile</a>
            </h4>
          </div>
        </div>
      </div>
      <div className="bottomBox">
        <a href="http://">View Presentation  <MdVerified className="text-blue-600"/></a>
        <a href="http://">View Synopsis</a>
        <a href="http://">View Final Report</a>
      </div>
    </div>
  );
};

export default project;
