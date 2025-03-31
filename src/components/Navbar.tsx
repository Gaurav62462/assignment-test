import React, { useState } from "react";
import CustomButton from "../CustomButton"
const options = [
  { value: 'google', label: 'Google' }
]

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const IconButton = (props: any) => {
    const { path } = props || {}
    return (
      <CustomButton className="text-[14px] font-medium flex justify-center items-center">
        <img src={`images/${path}`} alt='logo' />
      </CustomButton>
    )
  }
  return (
    <nav className="p-5 bg-[#FFFFFF] flex items-center justify-between flex-wrap px-6">
      <div className={`flex items-center gap-2`}>
        <p className="text-black_500 text-[16px] font-bold ">Review</p>
        <select className="border-2 border-[#4D4CAC] text-black_500 text-[16px]  h-[40px] rounded-[8px]">
          {
            (options || []).map((option, index) => {
              return (
                <option key={index} value={option.value}>{option.label}</option>
              )
            })
          }
        </select>
        <CustomButton className="!bg-[#40E1FA1A] !text-[#2CA01D] text-[12px] font-bold">Quickbook’s Data</CustomButton>
      </div>
      <button
        className="md:hidden text-black text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? "✖" : "☰"}
      </button>
      <div className={`absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none flex flex-row flex-wrap md:flex-row md:items-center gap-2 transition-all duration-300 ${isOpen ? "block" : "hidden md:flex"
        }`}>
        <IconButton path='search.svg' />
        <CustomButton className="text-[14px] font-medium">Export to Excel</CustomButton>
        <CustomButton className="text-[14px] font-medium ">Add Dcoument</CustomButton>
        <CustomButton className="text-[14px] font-medium ">Connect</CustomButton>
        <IconButton path='bell.svg' />
        <IconButton path='settings.svg' />
        <IconButton path='person.svg' />
      </div>
    </nav>
  )
}

export default React.memo(NavBar)