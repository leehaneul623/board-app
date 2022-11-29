import React from 'react'
import { Link } from 'react-router-dom'

const QuestionBox = ({ questionId, questionTitle, questionRegDate }) => {

  return (
    <div className='md:w-full lg:w-[50%]'>
      <Link to={`/detail/${questionId}`}>
        <div className="flex items-center justify-around sm:justify-between w-[100%] sm:w-[370px] h-[80%] sm:h-[230px] bg-white rounded-3xl drop-shadow-xl lg:ml-0 xl:ml-20 sm:mx-auto mb-20 ">
          <img src="../board-img/profile.jpg" alt="" className='w-[45%] sm:w-[50%] h-[50%] sm:h-[100%] sm:ml-10 py-6' />
          <div className="mt-20 mb-4 mr-4 sm:mt-24 sm:mb-0 sm:mr-10 ">
            <h1 className="text-lg font-semibold mb-3 text-right">
              {questionTitle && questionTitle.length > 7
                ? `${questionTitle.slice(0, 7)}...`
                : `${questionTitle}`}
            </h1>
            <p className="text-right">{questionRegDate}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default QuestionBox
