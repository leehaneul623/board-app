import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { url } from '../../util/url'
import { CgSpinner } from 'react-icons/cg'
import { useRecoilValue } from 'recoil'
import { userState } from '../../Recoil'
import QuestionBox from '../QuestionContent/QuestionBox'
import { useParams } from 'react-router-dom'
import { BsFillEmojiSmileFill } from 'react-icons/bs'
import { useMediaQuery } from 'react-responsive'

const ListContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [questionData, setQuestionData] = useState([])
  const userInfo = useRecoilValue(userState)
  const { tag } = useParams()
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' })

  const questionList = async () => {
    try {
      const json = await axios({
        url: `${url}/question/category`,
        method: 'GET',
        params: {
          category: tag,
        },
      })
      setQuestionData(json.data)
      setIsLoading(false)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    questionList()
  }, [tag])

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
      <div className="sm:w-[1100px] w-[450px] h-[1187px] pt-16">
        <div className="sm:flex items-center w-[500px] mb-[60px]">
          {isMobile ? "" : <div className="w-[200px]">
            <img src="../board-img/logo.jpg" alt="" />
          </div>}
          <div className="sm:w-[300px]">
            {userInfo == null ? '' : <b className='text-xl'>{`${userInfo.data.nickname}`} 님</b>}
            <p>익명 소통 커뮤니티 입니다.</p>
            <div className="flex">
              <p>익명으로 편하게 소통 할 수 있습니다.</p>
              <BsFillEmojiSmileFill className="text-2xl ml-2" />
            </div>
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
