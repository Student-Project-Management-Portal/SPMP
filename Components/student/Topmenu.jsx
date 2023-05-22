import React from 'react'
import { BsSearch } from "react-icons/bs";
import { GoSettings } from "react-icons/go";
import { IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineSetting, AiOutlineFileText } from "react-icons/ai";

const Topmenu = () => {
  return (
    <div className="nav w-full h-[100px] flex items-center justify-between px-12">
        {/* Dashboard heading */}
        <h1 className="text-4xl font-medium flex items-center">Dashboard</h1>
        <div className="rightside w-[50%] flex justify-between items-center">
          {/* search bar start*/}
          <div className="search w-[80%] h-[45px] flex items-center rounded-2xl border-zinc-500 bg-[#ffffff] pr-5">
            <label className="relative w-full h-full rounded-2xl">
              <BsSearch className="absolute left-3 inset-y-3 text-xl text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="w-full h-full px-10 rounded-2xl bg-transparent"
              />
            </label>
            <button
              style={{
                borderLeft: "1px solid rgb(107 114 128)",
                paddingLeft: "5px",
              }}
            >
              <GoSettings className="text-xl text-gray-500" />
            </button>
          </div>
          {/* search bar end */}
          {/* menu end */}
          <div className="menu flex gap-4">
            <button>
              <IoMdNotificationsOutline className="text-3xl text-gray-600" />
            </button>
            <button>
              <AiOutlineSetting className="text-3xl text-gray-600" />
            </button>
          </div>
          {/* menu end  */}
        </div>
      </div>
  )
}

export default Topmenu