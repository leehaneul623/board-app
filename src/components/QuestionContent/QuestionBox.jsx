import React from 'react'

const QuestionBox = ({ questionTitle, questionContent, questionRegDate }) => {
  return (
    <div className="w-[600px]">
      <div className="flex items-center w-[400px] h-[230px] bg-white rounded-3xl drop-shadow-xl ml-20 mb-20">
        <div className="w-[140px] h-[160px] bg-[url(../../board-img/profile.jpg)] bg-center bg-cover ml-10"></div>
        <div className="mt-24 ml-20">
          <h1 className="text-lg font-semibold mb-3">{questionTitle}</h1>
          <p className="text-right">{questionRegDate}</p>
        </div>
      </div>
    </div>
  )
}

export default QuestionBox
