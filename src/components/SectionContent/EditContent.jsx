import React from 'react'
import { BsChatDots } from 'react-icons/bs'

const EditContent = () => {
  return (
    <div className="w-[1200px] h-[1187px] pt-20">
      <div className="flex flex-row ml-32 mt-16 text-xl">
        <BsChatDots />
        <p className="ml-4">자유롭게 수정해주세요.</p>
      </div>
      <div className="flex items-center w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg text-gray-400 ml-8">제목을 입력해주세요.</p>
      </div>
      <div className="w-[1024px] h-[600px] bg-white rounded-3xl ml-32">
        <p className="text-lg text-gray-400 ml-8 mt-16 pt-10">
          내용을 입력해주세요.
        </p>
      </div>
      <div className="mt-14 ml-[1000px]">
        <button className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full mr-14">
          <p className="text-white">Edit</p>
        </button>
        <button className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full">
          <p className="text-white">Delete</p>
        </button>
      </div>
    </div>
  )
}

export default EditContent
