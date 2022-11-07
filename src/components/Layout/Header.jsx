import React from 'react'
import { BsSearch, BsBoxArrowInRight, BsPersonPlusFill } from 'react-icons/bs'
import { BiEditAlt } from 'react-icons/bi'
import { Link, useAsyncValue, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil'
import { useState } from 'react'

const Header = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [user, setUser] = useRecoilState(userState)

  return (
    <div className="w-full h-[90px] bg-[#F6F3F3] shadow-lg">
      <div className="flex flex-row justify-between items-center w-full h-20">
        <Link to="/">
          <div className="w-[150px] h-[70px]">
            <img src="../board-img/logo.jpg" alt="" />
          </div>
        </Link>
        <div className="w-[600px] h-[60px] bg-[#F6F3F3] border-solid border-4 border-gray rounded-full shadow-md">
          <form
            className="flex items-center justify-between"
            onSubmit={(e) => {
              navigate(`/keyword/${search}`)
            }}
          >
            <input
              type="text"
              className="w-[530px] h-[50px] p-4 bg-[#F6F3F3] rounded-3xl outline-none"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <button>
              <BsSearch className="text-3xl mr-4" />
            </button>
          </form>
        </div>
        <ul className="flex flex-row justify-end items-center w-[150px] h-[60px] mr-8">
          <li className="group relative h-[28px]">
            {user == null ? (
              <button
                onClick={() => {
                  navigate('/login')
                }}
              >
                <BsBoxArrowInRight className="text-[28px] text-gray-500" />
                <span className="absolute top-15 left-0 text-gray-400 text-lg hidden group-hover:block">
                  Login
                </span>
              </button>
            ) : (
              ''
            )}
          </li>
          <li className="group relative h-[28px]">
            <Link to="/signup">
              <BsPersonPlusFill className="text-[28px] text-gray-500 ml-6" />
              <span className="absolute top-15 left-3 text-gray-400 text-lg hidden group-hover:block">
                SignUp
              </span>
            </Link>
          </li>
          <li className="group relative h-[28px]">
            {user == null ? (
              <button
                onClick={() => {
                  alert('로그인 후 이용해 주세요.')
                }}
              >
                <BiEditAlt className="text-[28px] text-gray-500 ml-6" />
                <span className="absolute top-15 left-3 text-gray-400 text-lg hidden group-hover:block">
                  Write
                </span>
              </button>
            ) : (
              <Link to="/write">
                <BiEditAlt className="text-[28px] text-gray-500 ml-6" />
                <span className="absolute top-15 left-3 text-gray-400 text-lg hidden group-hover:block">
                  Write
                </span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
