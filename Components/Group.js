import React from 'react'
import {BsGithub} from "react-icons/bs"
import {BiLinkExternal} from "react-icons/bi"

const Group = (props) => {
  /*
    data={
      group:1,
      projectName:"software project managemet",

    }
  */
  return (
    <div className='w-[350px] rounded-xl drop-shadow-xl aspect-square bg-col1 overflow-hidden' >
      {/* upper */}
      <div className="w-full text-center py-4 border-b-2 shadow-xl bg-col3">
          <h2 className='text-xl uppercase'>Group - {props.group?props.group:2}</h2>
      </div>
      {/* bottom */}
      <div className="w-full px-3 py-4 overflow-hidden ">
          <h2 className='text-xl text-col4 capitalize text-center font-medium'>
            {props.projectName?props.projectName:"Software project management"}
          </h2>
          <br />
          <p className='text-left ' >Technologies: </p>
            <div className='flex flex-wrap ml-3'>
            {props.tech &&
              props.tech.map((e,i)=>(
                <p className='text-gray-600 ml-2' key={i}>{e}</p>
              ))
            } 
            </div>
            <br />
           <div className='center text-gray-700 border-2 rounded-2xl shadow-sm'>
           <span className='font-medium mr-1'>GitHub Link:</span> <a href={props.github} className='text-blue-900 '><BsGithub/></a>
            
            {props.deploy && <>
              <span className='font-medium ml-8 mr-1'>Deploy Link:</span> <a href={props.deploy} className='text-blue-900 '><BiLinkExternal/></a>
            </>}
           </div>
          <br />
          <button className="button text-sm"><a href={props.link}>More Details</a></button>
      </div>
    </div>
  )
}

export default Group