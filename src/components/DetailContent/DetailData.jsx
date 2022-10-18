import React from 'react'

const DetailData = ({ questionTitle, questionContent }) => {
  return (
    <div>
      <div className="flex items-center w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg text-gray-400 ml-8">{questionTitle}</p>
      </div>
      <div className="flex items-center w-[1024px] h-[600px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg text-gray-400 ml-8">{questionContent}</p>
      </div>
    </div>
  )
}

export default DetailData
