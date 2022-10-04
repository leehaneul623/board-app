import React from 'react'
import { BsChatDots } from 'react-icons/bs'

const WriteContent = () => {
  return (
    <div className="w-[1200px] h-[1187px] pt-20">
      <div className="flex flex-row ml-32 mt-16 text-xl">
        <BsChatDots />
        <p className="ml-4">자유롭게 작성해주세요.</p>
      </div>
      <div className="flex items-center w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg text-gray-400 ml-8">제목을 입력해주세요.</p>
      </div>
      <div className="w-[1024px] h-[600px] bg-white rounded-3xl ml-32">
        <p className="text-lg text-gray-400 ml-8 mt-16 pt-10">
          내용을 입력해주세요.
        </p>
      </div>
      <button className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full mt-14 ml-[1000px]">
        <p className="text-white">Submit</p>
      </button>
    </div>
  )
}

export default WriteContent
