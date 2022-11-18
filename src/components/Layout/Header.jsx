import React from 'react'
import { BsSearch, BsBoxArrowInRight, BsPersonPlusFill, BsCaretLeftFill } from 'react-icons/bs'
import { BiHappy } from "react-icons/bi";
import { BiEditAlt } from 'react-icons/bi'
import { Link, useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil'
import { useState } from 'react'
import { useMediaQuery } from 'react-responsive'

const Header = () => {
  const navigate = useNavigate()
  const [search, setSearch] = useState('')
  const [user, setUser] = useRecoilState(userState)
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' })

  const searchCheck = () => {
    if (search !== "") {
      navigate(`/keyword/${search}`);
    } else {
      alert("검색어를 입력해 주세요.");
    }
  };

  return (
    <div className="w-full h-[90px] bg-[#F6F3F3] shadow-lg">
      <div className="flex flex-row justify-between items-center w-full h-20">
        <Link to="/">
          <div>
            <img src="../board-img/logo.jpg" alt="" className='w-[100px] sm:w-[150px] h-[70px] sm:h-[10%] items-start' />
          </div>
        </Link>
        {isMobile ? "" : <div className="w-[35%] sm:w-[30%] h-[60px] bg-[#F6F3F3] border-solid border-4 border-gray rounded-full shadow-md">
          <form
            className="flex items-center justify-between"
            onSubmit={(e) => {
              searchCheck()
            }}
          >
            <input
              type="text"
              className="w-[80%] h-[50px] p-4 bg-[#F6F3F3] rounded-3xl outline-none"
              placeholder="Search..."
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
            <button>
              <BsSearch className="sm:text-3xl text-xl mr-4" />
            </button>
          </form>
        </div>}
        {isMobile ?
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content right-0 mt-3 p-2 shadow bg-base-100 rounded-box w-40">
              {user == null ? <li><a href='/login'>Login</a></li> : <li><a href='/mypage'>MyPage</a></li>}
              <li><a href='/signup'>SignUp</a></li>
              {user == null ?
                <li>
                  <button
                    onClick={() => {
                      alert('로그인 후 이용해 주세요.')
                    }}>Write</button>
                </li>
                :
                <li><a href='/write'>Write</a></li>}
              <li className="relative">
                <label
                  tabIndex="0"
                  className="flex flex-col justify-between"
                >
                  <input
                    type="checkbox"
                    name="menu_inner"
                    id="icon"
                    className="hidden peer"
                  ></input>
                  <p>Menu</p>
                  <ul className="peer-checked:block hidden h-96 text-gray-content rounded-lg z-10">
                    <Link to={`/list/knowledge`}>
                      <li className="group flex rounded-lg mb-6">
                        <p className="text-white group-hover:text-black ">
                          Knowledge
                        </p>
                      </li>
                    </Link>
                    <Link to={`/list/music`}>
                      <li className="group flex rounded-lg mb-6 ">
                        <p className="text-white group-hover:text-black ">
                          Music
                        </p>
                      </li>
                    </Link>
                    <Link to={`/list/exercise`}>
                      <li className="group flex rounded-lg mb-6 ">
                        <p className="text-white group-hover:text-black ">
                          Exercise
                        </p>
                      </li>
                    </Link>
                    <Link to={`/list/cooking`}>
                      <li className="group flex rounded-lg mb-6 ">
                        <p className="text-white group-hover:text-black ">
                          Cooking
                        </p>
                      </li>
                    </Link>
                    <Link to={`/list/etc`}>
                      <li className="group flex rounded-lg mb-6 ">
                        <p className="text-white group-hover:text-black ">
                          Etc
                        </p>
                      </li>
                    </Link>
                    <li className="group flex rounded-lg mb-6 ">
                      {user == null ? "" :
                        <button
                          onClick={() => {
                            setUser(null)
                            alert('로그아웃이 완료 되었습니다.')
                            navigate('/')
                          }}
                          className="text-white group-hover:text-black ">
                          Logout
                        </button>}
                    </li>
                  </ul>
                </label>
              </li>
            </ul>
          </div>
          : <ul className="flex flex-row justify-end items-center w-[150px] h-[60px] mr-8">
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
                <button onClick={() => {
                  navigate("/mypage")
                }}>
                  <BiHappy className="text-[28px] text-gray-500" />
                  <span className="absolute top-15 left-0 text-gray-400 text-lg hidden group-hover:block">
                    MyPage
                  </span>
                </button>
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
        }
      </div>
    </div>
  )
}

export default Header
