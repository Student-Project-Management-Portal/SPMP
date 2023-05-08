import Image from 'next/image'
import React from 'react'

const Certification = () => {
  return (
    <div className="flex w-5/6 flex-col lg:flex-row m-auto bg-col1 drop-shadow-lg rounded-md pb-4 lg:pb-0">
        <Image src={require("../../../images/certificate.png")} className='w-full lg:w-1/3'  width={"320"} height={"160"} alt='certificate' />
        <div className='w-full lg:w-2/3 text-left flex flex-col space-y-3 ml-3 justify-center'>
            <h2 className='text-bold text-lg'>MicrosoftCertified Azure Fundamentals</h2>
            <p className='text-gray-500'>Issued Apr 2023</p>
            <p className='text-gray-500'>Credential ID 1712-4357</p>
            <a className='p-4 border-1 w-48 rounded-xl shadow-lg bg-gray-200 hover:bg-gray-300 active:bg-gray-400 focus:outline-none focus:ring focus:ring-gray-200' href="https://www.credly.com/badges/bedf6ae0-6dd7-4939-a367-41479b2674bf/public_url">Show Credential</a>
        </div>

    </div>
  )
}

export default Certification