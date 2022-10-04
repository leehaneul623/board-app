import React from 'react'
import { BsFillEmojiSmileFill, BsFillHeartFill } from 'react-icons/bs'

const SignUpContent = () => {
  return (
    <div className="w-[1200px] h-[1187px] pt-20">
      <div className="flex flex-row text-2xl ml-32 mt-8">
        <BsFillEmojiSmileFill className="mr-1" />
        <BsFillHeartFill className="mr-4" />
        <p>welcome to who !</p>
      </div>
      <div className="ml-32 mt-10">
        <div className="ml-4 mb-2 text-lg">ID</div>
        <div className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md"></div>
      </div>
      <div className="ml-32 mt-10">
        <div className="ml-4 mb-2 text-lg">Password</div>
        <div className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md"></div>
      </div>
      <div className="ml-32 mt-10">
        <div className="ml-4 mb-2 text-lg">Password Confirmation</div>
        <div className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md"></div>
      </div>
      <div className="ml-32 mt-10">
        <div className="ml-4 mb-2 text-lg">Name</div>
        <div className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md"></div>
      </div>
      <div className="ml-32 mt-10">
        <div className="ml-4 mb-2 text-lg">NickName</div>
        <div className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md"></div>
      </div>
      <button className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full mt-14 ml-[1000px]">
        <p className="text-white">Submit</p>
      </button>
    </div>
  )
}

export default SignUpContent
