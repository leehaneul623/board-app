import React from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FiMusic } from 'react-icons/fi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsCupStraw, BsPeopleFill, BsBoxArrowLeft } from 'react-icons/bs'

const Menu = () => {
  return (
    <div className="w-full h-[950px] rounded-full mt-6 bg-gradient-to-b from-[#ABDEFF] to-[#49A9E8] opacity-80">
      <div className="flex flex-col justify-around h-full space-y-14 items-center text-white font-bold text-4xl">
        <div className="flex flex-col w-[80px] h-[500px] justify-between items-center">
          <BiBookBookmark />
          <FiMusic />
          <FaDribbble />
          <BsCupStraw />
          <BsPeopleFill />
        </div>
        <BsBoxArrowLeft />
      </div>
    </div>
  )
}

export default Menu
