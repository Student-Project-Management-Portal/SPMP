import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { RxCrossCircled } from "react-icons/rx";
import { TbWorldWww } from "react-icons/tb";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { MdVerified } from "react-icons/md";
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

        -> material( it was to be an array having object inside it
                    Like: [
                            {
                            name:"Presentation",
                            link:"Presentation link",  
                            verified:true
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
            material = {e.material}
          />
*/


const ProjectCardComp = (props) => {

    const style ={
        background: "linear-gradient(234deg, rgba(152,222,217,1) 0%, rgba(255,255,255,1) 100%)"
    }

  return (
    <div className='drop-shadow-md rounded-md border w-5/6 m-auto m-y-2 ' style={style}>
        {/* upper part */}
        <div className='flex mx-5 lg:m-2 flex-col lg:flex-row'>

            {/* upper left part Proj details */}
            <div className=' w-full lg:w-2/3 space-y-2 pt-3'>
            <h1 className="text-3xl font-medium text-gray-700 ">{props.projectName}</h1>
            <div className="flex space-x-2 text-2xl">
                {/* links */}
            {props.githubLink && <a href={props.githubLink} className='text-col4  hover:text-blue-500'>
              <AiFillGithub />
            </a>}
            {props.deployLink && <a href={props.deployLink} className='text-col4  hover:text-blue-500'>
              <TbWorldWww />
              
            </a>}
          </div>
          {/* technologies */}
          {props.tech && <div className="flex">
            <h4 className='mr-2'>TechStack:</h4>
            <p>
                {
                    props.tech.map((e,i)=>(
                        <span className="mr-1 text-gray-600" key={i}> {e} </span>
                    ))
                }
            </p>
          </div>}
            
            </div>

            {/* upper Right part Teammate */}
            {props.teamMate && <div className="w-5/6 sm:w-4/6  lg:w-1/3  my-5 mx-3 lg:m-2 p-2 pl-5 border-l-2 border-col3">
          <h3 className="font-medium text-2xl text-gray-800">Team Details</h3>
          <div className="teamName">
            {
                props.teamMate.map((e,i)=>(
                    <h4 key={i} className='flex justify-between'>
                        <span className="text-gray-500">{e.name}</span>{e.link && <a href={e.link} className='text-col4  hover:text-blue-500'>View Profile</a>}
                    </h4>
                ))
            }
          </div>
        </div>}
        </div>
        {/* bottom section */}
        {props.material && <div className='flex justify-evenly mb-3' >
                {
                    props.material.map((e,i)=>(
                        <a href="http://" className='flex items-center text-col4  hover:text-blue-500' key={i}>{e.name}  
                        {
                            e.verified?<MdVerified title='Verified' className="text-green-600 ml-1"/>:<RxCrossCircled title='Not Verified' className="text-grey-600 ml-1"/>
                        }
                        </a>
                    ))
                }
            </div>}
    </div>
  )
}

export default ProjectCardComp