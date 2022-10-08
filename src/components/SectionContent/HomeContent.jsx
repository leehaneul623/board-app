import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { url } from '../../utile/url'
import { CgSpinner } from 'react-icons/cg'
import QuestionBox from '../QuestionContent/QuestionBox'

const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [questionData, setQuestionData] = useState([])

  const questionList = async () => {
    try {
      const json = await axios({
        url: `${url}/question/list`,
        method: 'GET',
      })

      setQuestionData(json.data)
      setIsLoading(false)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    questionList()
  }, [])

  if (error) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-rose-500 text-2xl">{error.message}</p>
      </div>
    )
  }
  if (isLoading) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p className="text-rose-500 text-2xl">
          <CgSpinner className="m-auto mb-2 animate-spin text-3xl" />
          Loading
        </p>
      </div>
    )
  }

  return (
    <div>
      <div className="w-[1200px] h-[1187px] pt-20">
        <div className="flex w-[500px] h-[100px] ml-32 mb-[50px]">
          <div className="w-[100px] h-[100px] rounded-full bg-red-100"></div>
          <div className="w-[300px] bg-blue-200 ml-6">
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex flex-wrap">
          {questionData.map((data, index) => (
            <QuestionBox
              key={index}
              questionTitle={data.title}
              questionContent={data.content}
              questionRegDate={data.regDate}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home
