import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useParams } from 'react-router-dom'
import { url } from '../../util/url'
import QuestionBox from '../QuestionContent/QuestionBox'
import { useMediaQuery } from 'react-responsive'

const KeywordContent = () => {
  const [search, setSearch] = useState([])
  const { keyword } = useParams()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const isMobile = useMediaQuery({ query: '(max-width: 639px)' })

  useEffect(() => {
    axios
      .get(`${url}/question/search?keyword=${keyword}`)
      .then((res) => {
        setSearch(res.data)
        setIsLoading(false)
      })
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
    <div className='w-[85%] 2xl:w-[90%]'>
      <div className="w-full 2xl:w-[1200px] h-[1187px] pt-16 md:px-0 sm:pl-12">
        <div className="sm:flex items-center sm:w-[120%] md:w-[100%] lg:w-[60%] mb-[60px]">
          {isMobile ?
            ""
            :
            <div className="w-[200px]">
              <img src="../board-img/logo.jpg" alt="" />
            </div>}
          <div>
            <p className='flex items-center'>현재 검색어는 &nbsp; <span className='text-2xl'> {keyword} </span> &nbsp; 입니다.</p>
          </div>
        </div>
        <div className="md:flex flex-wrap md:justify-center lg:justify-between content-start h-[870px] overflow-y-scroll">
          {search.map((data, index) => (
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

export default KeywordContent
