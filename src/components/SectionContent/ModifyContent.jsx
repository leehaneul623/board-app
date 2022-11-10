import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { CgSpinner } from 'react-icons/cg'
import { useNavigate, useParams } from 'react-router-dom'
import { url } from '../../util/url'

const ModifyContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [detailData, setDetailData] = useState([])
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')
  const navigate = useNavigate()

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

  const postDelete = async () => {
    const data = await axios({
      url: `${url}/question/delete/${questionId}`,
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
      navigate('/')
    }
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
    <div className="sm:w-[1200px] w-[450px] h-[1187px] pt-20">
      <div className="flex flex-row sm:ml-32 mt-16 text-xl">
        <BsChatDots />
        <p className="ml-4">자유롭게 수정해주세요.</p>
      </div>
      <div>
        <input
          type="text"
          className="leading-[75px] sm:w-[83%] w-[95%] h-[75px] bg-white rounded-3xl sm:ml-32 mt-10 p-4 text-lg"
          value={titleValue}
          onChange={(e) => {
            setTitleValue(e.target.value)
          }}
        />
        <textarea
          type="text"
          className="sm:w-[83%] w-[95%] h-[600px] bg-white rounded-3xl sm:ml-32 mt-10 p-4 text-lg overflow-y-scroll"
          value={contentValue}
          onChange={(e) => {
            setContentValue(e.target.value)
          }}
        ></textarea>
      </div>
      <div className="flex mt-14 sm:ml-[63%] ml-[25%]">
        <button
          onClick={postCheck}
          className="sm:w-[150px] w-[120px] h-[60px] bg-[#49A9E8] rounded-full"
        >
          <p className="text-white">Edit</p>
        </button>
        <button
          onClick={deleteCheck}
          className="sm:w-[150px] w-[120px] h-[60px] bg-[#49A9E8] rounded-full ml-14"
        >
          <p className="text-white">Delete</p>
        </button>
      </div>
    </div>
  )
}

export default ModifyContent
