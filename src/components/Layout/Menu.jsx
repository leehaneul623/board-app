import React, { useState } from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FiMusic } from 'react-icons/fi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsCupStraw, BsPeopleFill, BsBoxArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userState } from '../../Recoil'
import { useRecoilState } from 'recoil'
import List from '../../routes/List'

const Menu = () => {
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)

  return (
    <div className="w-[80px] h-[950px] rounded-full mt-6 bg-gradient-to-b from-[#ABDEFF] to-[#49A9E8] opacity-80 py-[100px]">
      <div className="flex flex-col justify-between  h-full space-y-14 items-center text-white font-bold text-4xl">
        <div className="flex flex-col h-[500px] justify-between items-center">
          <Link to={`/list/knowledge`}>
            <BiBookBookmark />
          </Link>
          <Link to={`/list/music`}>
            <FiMusic />
          </Link>
          <Link to={`/list/exercise`}>
            <FaDribbble />
          </Link>
          <Link to={`/list/cooking`}>
            <BsCupStraw />
          </Link>
          <Link to={`/list/etc`}>
            <BsPeopleFill />
          </Link>
        </div>
        {user != null ? (
          <button
            onClick={() => {
              setUser(null)
              alert('로그아웃이 완료 되었습니다.')
              navigate('/')
            }}
          >
            <BsBoxArrowLeft />
          </button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default Menu
