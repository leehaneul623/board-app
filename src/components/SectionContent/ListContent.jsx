import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../util/url'
import { CgSpinner } from 'react-icons/cg'
import { useRecoilValue } from 'recoil'
import { userState } from '../../Recoil'
import QuestionBox from '../QuestionContent/QuestionBox'
import { useParams } from 'react-router-dom'

const ListContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [questionData, setQuestionData] = useState([])
  const userInfo = useRecoilValue(userState)
  const { category } = useParams()
  const questionList = async () => {
    try {
      const json = await axios({
        url: `${url}/category?category=${category}`,
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
      <div className="w-[1200px] h-[1187px] pt-16">
        <div className="flex w-[500px] h-[100px] ml-32 mb-[60px]">
          <div className="w-[150px] h-[150px] bg-[url(../../board-img/logo.jpg)] bg-center bg-cover"></div>
          <div className="w-[300px] ml-6 mt-12">
            {userInfo == null ? '' : <b>{`${userInfo.data.nickname}`}님</b>}
            <p>익명 소통 커뮤니티 입니다.</p>
            <p>익명으로 편하게 소통 할 수 있습니다 :)</p>
          </div>
        </div>
        <div className="flex flex-wrap content-start h-[870px] overflow-y-scroll">
          {questionData.map((data, index) => (
            <QuestionBox
              key={index}
              questionId={data.id}
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

export default ListContent
