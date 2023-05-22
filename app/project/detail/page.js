import React from 'react'

const page = () => {
  return (
    <div className='w-screen min-h-screen  p-10 space-y-7 flex flex-col '>
        <h1 className='text-4xl font-bold my-4 text-gray-700 tshadow' >Software Project Management App</h1>
        <div className='shadow-lg bg-slate-100 p-4 rounded-md'>
            <p className='text-slate-900'> Summary:</p>
            <p className='text-gray-400 mx-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium similique perspiciatis id blanditiis quia. Omnis, dolor quas corporis porro iure sed facere aspernatur sit velit? Commodi doloribus quis porro vero?
            </p>
        </div>
        <div className='w-full  mt-3 space-x-2 center ' >
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
            </div>
            {/* right links etc */}
            <div className='w-1/2 bg-slate-500'>
            </div>
        </div>

        
    </div>
  )
}

export default page