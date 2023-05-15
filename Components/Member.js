import React from 'react'
import Image from 'next/image'

const Member = (props) => {

    /*
        data={
            name:"abhishek",
            course:"Btech",
            branch:"csit",
            session:"2020-24",
            link:"/abhishek/profile"    // link of the user profile

        }


    */

  return (
    <div className=' bg-col1  rounded-md drop-shadow-xl flex items-center m-3 justify-around p-4 space-x-3 w-128'>
        {/* left */}
        <div className="w-2/6  center">
            <div className='w-11/12 overflow-hidden center aspect-square rounded-full drop-shadow-lg border-4 border-slate-300 bg-slate-400'>
                <Image src="/images/user.jpeg" className='h-full ' width={200} height={200} alt='User' />
            </div>
        </div>
        {/* right */}
        <div className="w-4/6 mr-1 space-y-2">
                <h2 className='text-xl font-medium uppercase text-col4' >
                    {props.name?(props.name):"Dummy Name"}
                </h2>
                <div className='ml-2 space-y-1 text-gray-700' >
                    <p><strong>Course:</strong> {props.course?props.course:"B.Tech"}  <strong className='ml-3'>Branch:</strong> {props.branch?<props className="branch"></props>:"CSIT"}</p>
                    <p>{props.session?props.session:"2020-24"}</p>
                </div>
                    <button className='button'><a href={props.link?props.link:"/student/profile"}>View Profile</a></button>
        </div>
    </div>
  )
}

export default Member