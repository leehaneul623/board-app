import React from 'react'

const DetailContent = () => {
  return (
    <div className="w-[1200px] h-[1187px] pt-20">
      <div className="ml-[780px]">
        <button className="w-[150px] h-[45px] bg-[#ABDEFF] rounded-full mr-14">
          <p className="text-white">Edit</p>
        </button>
        <button className="w-[150px] h-[45px] bg-[#ABDEFF] rounded-full">
          <p className="text-white">Delete</p>
        </button>
      </div>
      <div className="flex items-center w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg text-gray-400 ml-8">제목 ...</p>
      </div>
      <div className="flex items-center w-[1024px] h-[600px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg text-gray-400 ml-8">내용 ...</p>
      </div>
      <div className="flex flex-row mt-10">
        <div className="flex items-center w-[850px] h-[58px] bg-white rounded-3xl ml-32 ">
          <p className="text-lg text-gray-400 ml-8">
            댓글을 작성하려면 로그인을 해주세요.
          </p>
        </div>
        <button className="w-[150px] h-[58px] bg-[#ABDEFF] rounded-full ml-6">
          <p className="text-white">Submit</p>
        </button>
      </div>
      <div className="flex items-center w-[850px] h-[58px] bg-white rounded-3xl ml-32 mt-10">
        <p className="ml-8 border-r-[3px] whitespace-pre">Miki </p>
      </div>
      <div className="flex items-center w-[850px] h-[58px] bg-white rounded-3xl ml-32 mt-10">
        <p className="ml-8 border-r-[3px] whitespace-pre">Noma </p>
      </div>
    </div>
  )
}

export default DetailContent
