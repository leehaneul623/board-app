import React, { useState } from 'react'
import { FaDribbble } from 'react-icons/fa'
import { FiMusic } from 'react-icons/fi'
import { BiBookBookmark } from 'react-icons/bi'
import { BsCupStraw, BsPeopleFill, BsBoxArrowLeft } from 'react-icons/bs'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userState } from '../../Recoil'
import { useRecoilState } from 'recoil'
import List from '../../routes/List'
import { useMediaQuery } from 'react-responsive'

const Menu = () => {
  const navigate = useNavigate()
  const [user, setUser] = useRecoilState(userState)
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' })

  return (

    <div>
      {isMobile ? ""
        :
        <div className="w-[80px] h-[950px] rounded-full mt-6 bg-gradient-to-b from-[#ABDEFF] to-[#49A9E8] opacity-80 py-[100px]">
          <div className="flex flex-col justify-between h-full space-y-14 items-center text-white text-4xl">
            <ul className="flex flex-col h-[500px] justify-between items-center">
              <li className="group relative h-[28px]">
                <Link to={`/list/knowledge`}>
                  <BiBookBookmark />
                </Link>
                <span className="absolute top-15 text-gray-600 text-lg hidden group-hover:block">
                  Knowledge
                </span>
              </li>
              <li className="group relative h-[28px]">
                <Link to={`/list/music`}>
                  <FiMusic />
                </Link>
                <span className="absolute top-15 text-gray-600 text-lg hidden group-hover:block">
                  Music
                </span>
              </li>
              <li className="group relative h-[28px]">
                <Link to={`/list/exercise`}>
                  <FaDribbble />
                </Link>
                <span className="absolute top-15 text-gray-600 text-lg hidden group-hover:block">
                  Exercise
                </span>
              </li>
              <li className="group relative h-[28px]">
                <Link to={`/list/cooking`}>
                  <BsCupStraw />
                  <span className="absolute top-15 text-gray-600 text-lg hidden group-hover:block">
                    Cooking
                  </span>
                </Link>
              </li>
              <li className="group relative h-[28px]">
                <Link to={`/list/etc`}>
                  <BsPeopleFill />
                </Link>
                <span className="absolute top-15 text-gray-600 text-lg hidden group-hover:block">
                  Etc
                </span>
              </li>
            </ul>
            <ul>
              <li className="group relative h-[28px]">
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
                <span className="absolute top-15 text-gray-700 text-lg hidden group-hover:block">
                  Logout
                </span>
              </li>
            </ul>
          </div>
        </div>
      }
    </div>
  )
}

export default Menu
