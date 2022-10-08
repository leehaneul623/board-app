import React from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FiMusic } from 'react-icons/fi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsCupStraw, BsPeopleFill, BsBoxArrowLeft } from 'react-icons/bs'

const Menu = () => {
  return (
    <div className="w-20 h-[950px] bg-red-200 rounded-full mt-6 bg-gradient-to-b from-[#ABDEFF] to-[#49A9E8] opacity-80">
      <div className="flex flex-col space-y-14 items-center text-white font-bold text-4xl">
        <BiBookBookmark className="mt-8" />
        <FiMusic />
        <FaDribbble />
        <BsCupStraw />
        <BsPeopleFill />
        <BsBoxArrowLeft />
      </div>
    </div>
  )
}

export default Menu
