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
    <div className='w-[85%] 2xl:w-[90%]'>
      <div className="w-full 2xl:w-[1200px] h-[1187px] pt-16 md:px-0 sm:pl-12">
        <div className="sm:flex items-center sm:w-[120%] md:w-[100%] lg:w-[60%] mb-[60px]">
          {isMobile ?
            ""
            :
            <div className="w-[200px]">
              <img src="../board-img/logo.jpg" alt="" />
            </div>}
          <div className="sm:w-[350px]">
            {userInfo == null ? '' : <b className='text-xl'>{`${userInfo.data.nickname}`} 님</b>}
            <p>익명 소통 커뮤니티 입니다.</p>
            <div className="flex">
              <p>익명으로 편하게 소통 할 수 있습니다.</p>
              <BsFillEmojiSmileFill className="text-2xl ml-2" />
            </div>
          </div>
        </div>
        <div className="md:flex flex-wrap md:justify-center lg:justify-between content-start h-[870px] overflow-y-scroll">
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
