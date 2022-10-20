import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'
import { useParams } from 'react-router-dom'
import { url } from '../../util/url'
import DetailModify from '../DetailContent/DetailModify'

const ModifyContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [detailData, setDetailData] = useState([])
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')

  const { questionId } = useParams()

  const editContent = async () => {
    try {
      const json = await axios({
        url: `${url}/question/detail/${questionId}`,
        method: 'GET',
      })

      setDetailData(json.data)
      setTitleValue(json.data.title)
      setContentValue(json.data.content)
      setIsLoading(false)
    } catch (e) {
      setError(e)
    }
  }
  console.log(detailData.title)

  useEffect(() => {
    editContent()
  }, [])

  const postUpDate = async () => {
    const data = await axios({
      url: `${url}/question/modify/${questionId}`,
      method: 'POST',
      data: {
        title: titleValue,
        content: contentValue,
      },
    })
  }

  const postCheck = () => {
    if (titleValue === '') {
      alert('제목을 입력해주세요.')
    } else if (contentValue === '') {
      alert('내용을 입력해주세요.')
    } else {
      alert('수정이 완료되었습니다.')
      postUpDate()
    }
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
      <div className="flex flex-row ml-32 mt-16 text-xl">
        <BsChatDots />
        <p className="ml-4">자유롭게 수정해주세요.</p>
      </div>
      <div>
        <input
          type="text"
          className="leading-[75px] w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10 p-4 text-lg"
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value)
          }}
        />

        <div className="w-[1024px] h-[600px] bg-white rounded-3xl ml-32 mt-10 overflow-y-scroll">
          <p className="text-lg p-4">{detailData.content}</p>
        </div>
      </div>
      <div className="mt-14 ml-[1000px]">
        <button
          onClick={postCheck}
          className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full mr-14"
        >
          <p className="text-white">Edit</p>
        </button>
        <button className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full">
          <p className="text-white">Delete</p>
        </button>
      </div>
    </div>
  )
}

export default ModifyContent
