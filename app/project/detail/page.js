import Member from '@/Components/Member'
import React from 'react'
import {BsArrowRight} from "react-icons/bs"

const page = () => {
  return (
    <div className='w-screen min-h-screen  p-10 space-y-7 flex flex-col '>
        <h1 className='text-4xl font-bold my-4 text-gray-700 tshadow' >Software Project Management App</h1>
        <div className='shadow-lg bg-slate-100 p-4 rounded-md'>
            <p className='text-slate-900'> Description:</p>
            <p className='text-gray-400 mx-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique perspiciatis id blanditiis quia. Omnis, dolor quas corporis porro iure sed facere aspernatur sit velit? Commodi doloribus quis porro vero?
            </p>
        </div>
        <div className='w-full  mt-3 space-x-2 flex  px-4 items-start' >
            {/* left links etc */}
            <div className='w-1/2'>
                <div className='m-5'>
                    <h2 className='text-lg font-medium'>Technologies:</h2>
                    <ul className='flex justify-start space-x-6 w-full m-3 flex-wrap space-y-3'><li></li>
                        <li className='bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>ReactJs</li>
                        <li className='bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>ReactJs</li>
                        <li className='bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>ReactJs</li>
                        <li className='bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>ReactJs</li>
                    </ul>
                </div>
                <div className='m-5'>
                    <h2 className='text-lg font-medium'>Links:</h2>
                    <ul className='flex  flex-col space-x-6 w-fit mx-3 space-y-6'><li></li>
                        <li className='flex justify-between items-center w-auto bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>
                            GitHub Link <BsArrowRight className='mx-5'/>
                            <span className='text-col4 '><a href="">Active Link</a></span>
                        </li>
                        <li className='flex justify-between items-center w-auto  bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>
                            Deploy Link <BsArrowRight className='mx-5'/>
                            <span className='text-col4 '><a href="">Active Link</a></span>
                        </li>
                        <li className='flex justify-between items-center w-auto bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>
                            Report Link <BsArrowRight className='mx-5'/>
                            <span className='text-col4 '><a href="">Active Link</a></span>
                        </li>
                        <li className='flex justify-between items-center w-auto bg-slate-100 border-3 border-black px-2 py-1 rounded-md shadow-lg'>
                            PPT Link <BsArrowRight className='mx-5'/>
                            <span className='text-col4 '><a href="">Active Link</a></span>
                        </li>
                    </ul>
                </div>
            </div>
            {/* right links etc */}
            <div className='w-1/2 p-5'>
                <h2 className='text-lg font-medium'>Team Members:</h2>
                <Member/>
                <Member/>
                <Member/>
                <Member/>
            </div>
        </div>

        
    </div>
  )
}

export default page