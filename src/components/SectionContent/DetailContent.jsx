import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { url } from '../../util/url'
import { CgSpinner } from 'react-icons/cg'
import DetailData from '../DetailContent/DetailData'

const DetailContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [detailData, setDetailData] = useState([])
  const navigate = useNavigate()

  const { questionId } = useParams()

  const detailContents = async () => {
    try {
      const json = await axios({
        url: `${url}/question/detail/${questionId}`,
        method: 'GET',
      })

      setDetailData(json.data)
      setIsLoading(false)
    } catch (e) {
      setError(e)
    }
  }

  useEffect(() => {
    detailContents()
  }, [])

  const postDelete = async () => {
    const data = await axios({
      url: `${url}/question/delete/${questionId}`,
      method: 'POST',
    })
  }

  const deleteCheck = () => {
    alert('게시물 삭제가 완료 되었습니다.')
    postDelete()
    navigate('/')
  }

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
    <div className="w-[1200px] h-[1187px] pt-20">
      <div className="ml-[780px]">
        <Link to={`/modify/${questionId}`}>
          <button className="w-[150px] h-[45px] bg-[#ABDEFF] rounded-full mr-14">
            <p className="text-white">Edit</p>
          </button>
        </Link>
        <button
          onClick={deleteCheck}
          className="w-[150px] h-[45px] bg-[#ABDEFF] rounded-full"
        >
          <p className="text-white">Delete</p>
        </button>
      </div>
      <DetailData
        questionTitle={detailData.title}
        questionContent={detailData.content}
      />
      <div className="flex flex-row mt-10">
        <Link to="/login">
          <div className="flex items-center w-[850px] h-[58px] bg-white rounded-3xl ml-32 ">
            <p className="text-lg text-gray-400 ml-8">
              댓글을 작성하려면 로그인을 해주세요.
            </p>
          </div>
        </Link>
        <button className="w-[150px] h-[58px] bg-[#ABDEFF] rounded-full ml-6">
          <p className="text-white">Submit</p>
        </button>
      </div>
      <div className="flex items-center w-[850px] h-[58px] bg-white rounded-3xl ml-32 mt-10">
        <p className="ml-8 border-r-[3px] whitespace-pre">Miki </p>
      </div>
      <div className="flex items-center w-[850px] h-[58px] bg-white rounded-3xl ml-32 mt-10">
        <p className="ml-8 border-r-[3px] whitespace-pre">Noma </p>
      </div>
    </div>
  )
}

export default DetailContent
