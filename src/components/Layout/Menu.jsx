import React, { useState } from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FiMusic } from 'react-icons/fi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsCupStraw, BsPeopleFill, BsBoxArrowLeft } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { userState } from '../../Recoil'
import { useRecoilState } from 'recoil'

const Menu = () => {
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)

  return (
    <div className="w-[80px] h-[950px] rounded-full mt-6 bg-gradient-to-b from-[#ABDEFF] to-[#49A9E8] opacity-80">
      <div className="flex flex-col justify-around h-full space-y-14 items-center text-white font-bold text-4xl">
        <div className="flex flex-col h-[500px] justify-between items-center">
          <BiBookBookmark />
          <FiMusic />
          <FaDribbble />
          <BsCupStraw />
          <BsPeopleFill />
        </div>
        <button
          onClick={() => {
            setUser(false)
            alert('로그아웃이 완료 되었습니다.')
            navigate('/')
          }}
        >
          <BsBoxArrowLeft />
        </button>
      </div>
    </div>
  )
}

export default Menu
