import React from 'react'
import { Link } from 'react-router-dom'

const QuestionBox = ({ questionId, questionTitle, questionRegDate }) => {

  return (
    <div>
      <Link to={`/detail/${questionId}`}>
        <div className="w-[580px]">
          <div className="flex items-center justify-between w-[400px] h-[230px] bg-white rounded-3xl drop-shadow-xl ml-20 mb-20 ">
            <div>
              <img src="../board-img/profile.jpg" alt="" className='w-[160px] h-[170px] ml-10' />
            </div>
            <div className="mt-24 mr-10 ">
              <h1 className="text-lg font-semibold mb-3 text-right">
                {questionTitle && questionTitle.length > 8
                  ? `${questionTitle.slice(0, 8)}...`
                  : `${questionTitle}`}
              </h1>
              <p className="text-right text-right">{questionRegDate}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default QuestionBox
