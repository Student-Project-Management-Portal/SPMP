import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { TbWorldWww } from "react-icons/tb";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
// import "../styles/profile.scss";
/*
    Content:
        -> key
        -> projectName
        -> githubLink
        -> deployLink

        -> tech (it was to be an array having technologies
                    Like: [html,css,js]
                )
                
        -> teamMate( it was to be an array having object inside it
                    Like: [
                            {
                            name:"teamMate 1",
                            link:"Profile link",  
                            }
                        ]
                )
    
    initialize:
        <ProjectCard  
            key={i}
            projectName={e.projectName}
            githubLink={e.githubLink}
            deployLink={e.deployLink}
            tech={e.tech}
            teamMate={e.teamMate}
          />
*/
const ProjectCard = (props) => {
  return (
    <div id="project" key={props.key}>
      <div className="upBox flex">
        <div className="leftBox">
          <h1 className="text-3xl">{props.projectName}</h1>
          <div className="links text-2xl">
            {props.githubLink && <a href={props.githubLink} >
              <AiFillGithub />
            </a>}
            {props.deployLink && <a href={props.deployLink}>
              <TbWorldWww />
              
            </a>}
          </div>
          {props.tech && <div className="techStack">
            <h4>TechStack:</h4>
            <p>
                {
                    props.tech.map((e,i)=>(
                        <span className="mr-1" key={i}> {e} </span>
                    ))
                }
            </p>
          </div>}
        </div>
        {props.teamMate && <div className="teamBox">
          <h3 className="text-2xl">Team Details</h3>
          <div className="teamName">
            {
                props.teamMate.map((e,i)=>(
                    <h4 key={i}>
                        {e.name}{e.link && <a href={e.link}>View Profile</a>}
                    </h4>
                ))
            }
          </div>
        </div>}
      </div>
      <div className="bottomBox">
        <a href="http://">View Presentation  <MdVerified className="text-blue-600"/></a>
        <a href="http://">View Synopsis</a>
        <a href="http://">View Final Report</a>
      </div>
    </div>
  );
};

export default ProjectCard;
