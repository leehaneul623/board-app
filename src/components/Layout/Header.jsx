import React from 'react'
import { BsSearch, BsBoxArrowInRight, BsPersonPlusFill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'

const Header = () => {
  return (
    <div className="w-full h-20 bg-[#F6F3F3] shadow-xl">
      <div className="flex flex-row justify-between items-center w-full h-20">
        <div className="w-[100px] h-[60px] bg-blue-100">LOGO</div>
        <div className="flex items-center flex-row-reverse w-[600px] h-[60px] bg-gray-200 border-solid border-2 border-white rounded-full ">
          <BsSearch className="text-3xl mr-4" />
        </div>
        <div className="flex flex-row justify-between items-center w-[150px] h-[60px] mr-8">
          <BsBoxArrowInRight className="text-[28px] text-gray-500" />
          <BsPersonPlusFill className="text-[28px] text-gray-500" />
          <BiEditAlt className="text-[28px] text-gray-500" />
        </div>
      </div>
    </div>
  )
}

export default Header
