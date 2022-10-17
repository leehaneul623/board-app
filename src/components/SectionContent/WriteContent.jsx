import React from 'react'
import { BsChatDots } from 'react-icons/bs'

const WriteContent = () => {
  return (
    <div className="w-[1200px] h-[1187px] pt-20">
      <div className="flex flex-row justify-around ml-20 mt-16 text-xl">
        <div className="flex mt-4">
          <BsChatDots />
          <p className="ml-4">자유롭게 작성해주세요.</p>
        </div>
        <div></div>
        <select className="select select-info w-full max-w-xs">
          <option disabled selected>
            Category
          </option>
          <option>English</option>
          <option>Japanese</option>
          <option>Italian</option>
          <option>Italian</option>
          <option>Italian</option>
        </select>
      </div>
      <input
        type="text"
        className="flex items-center w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10 pl-4"
        placeholder="제목을 입력해주세요."
      ></input>
      <input
        type="text"
        className="w-[1024px] h-[600px] bg-white rounded-3xl ml-32 mt-14 pl-4"
        placeholder="내용을 입력해주세요."
      ></input>
      <button className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full mt-14 ml-[1000px]">
        <p className="text-white">Submit</p>
      </button>
    </div>
  )
}

export default WriteContent
