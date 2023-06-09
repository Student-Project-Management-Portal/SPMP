"use client"
import React, { useRef, useState } from 'react'
import Group from "@/Components/Group"


const Main = () => {
    const [sideBarShow, setSideBarShow] = useState(true)
    const choose = useRef("")
    console.log(choose.current)
    const Search = ()=>{
      if(window.innerWidth<728 && sideBarShow){
        choose.current.style.left="-100000px"
        setSideBarShow(false)
      }else{
        choose.current.style.left="0px"
        setSideBarShow(true)
      }
    }
  return (
  <>
    {/* Left side */}
      <div ref={choose}  className={`  w-screen  md:w-2/5 lg:w-1/5   min-h-screen  fixed top-0  flex items-center space-y-3 pt-10 flex-col overflow-hidden bg-slate-300 z-10`} style={{left:"0px"}}>
        <h2 className='font-bold text-xl mb-3'>Session:</h2>
       <div className='w-screen md:w-full ' >
       <select className='block w-5/6 m-auto border-2 drop-shadow outline-0'>
            <option value="2019-23">2019-20</option>
            <option value="2020-24">2020-24</option>
            <option value="2021-25">2021-25</option>
            <option value="2022-26">2022-26</option>  
        </select><br />
       
       </div>
        <h2 className='font-bold text-xl mb-3 '>Branch:</h2>
       <div className='w-screen md:w-full ' >
       <select className='block w-5/6 m-auto border-2 drop-shadow outline-0'>
            <option value="CSE">CSE</option>
            <option value="CSIT">CSIT</option>
            <option value="CSE-AIML">CSE-AIML</option>
            <option value="CSE-DS">CSE-DS</option>  
        </select><br />
       
       </div>
       <button className="button" onClick={Search}>Search</button>

    </div>

    {/* right side */}
    <div className='w-screen md:w-3/5 lg:w-4/5 space-y-5 right-0 absolute top-0  bg-slate-200 center md:space-x-6 min-h-screen py-5 flex-wrap '>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
        <Group/>
    </div>

  </>
  )
}

export default Main