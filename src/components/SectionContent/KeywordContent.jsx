import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { CgSpinner } from 'react-icons/cg'
import { useParams } from 'react-router-dom'
import { url } from '../../util/url'
import QuestionBox from '../QuestionContent/QuestionBox'

const KeywordContent = () => {
  const [search, setSearch] = useState([])
  const { keyword } = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios
      .get(`${url}/question/search`, {
        params: {
          keyword: keyword,
        },
      })
      .then((res) => {
        setSearch(res.data)
        setLoading(false)
      })
  }, [])

  if (loading) {
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
            <p>현재 검색어는 "{keyword}" 입니다.</p>
          </div>
        </div>
        <div className="flex flex-wrap content-start h-[870px] overflow-y-scroll">
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
