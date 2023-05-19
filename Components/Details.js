import React from 'react'
import Image from 'next/image'
import {AiFillLinkedin} from "react-icons/ai"
import {TbWorldWww} from "react-icons/tb"

const Details = () => {
  return (
    <div className='mx-3 flex flex-col  content-center text-center px-3 ' >
        <Image className='w-3/6 sm:w-1/3 md:w-1/4 lg:w-1/2 rounded-full mx-auto my-5 shadow-lg'  src="/images/user.png" width={"100"} height={"100"} alt='user' />
        <h1 className='text-3xl text-gray-700 uppercase tshadow text-bold' >Abhishek </h1>
        <br />
        <div className='text-center lg:text-left text-md  text-gray-500 border-t-4 border-blue-200 pt-3 space-y-4 '>
        <p><span className='  text-gray-800'>B.Tech:</span> CSE & IT </p>
        <p><span className='text-gray-800'>Batch:</span> 2020 - 2024</p>
        <p><span className='text-gray-800'>Mobile:</span> 992724XXXX</p>
        <p><span className='text-gray-800'>Email:</span> abhishek.singhal.2020.csit@miet.ac.in</p>
        </div>
        <div className="flex justify-center lg:justify-start  text-4xl space-x-3 mt-3">
          <a href="https://abhisheksinghal.tk/" className='text-col4 hover:text-blue-500'><TbWorldWww/></a>
          <a href="https://www.linkedin.com/in/abhishek-singhal-112001/" className='text-col4 hover:text-blue-500'><AiFillLinkedin/></a>
        </div>
        
    </div>
  )
}

export default Details