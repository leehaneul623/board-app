import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { url } from '../../util/url'
import { CgSpinner } from 'react-icons/cg'
import DetailData from '../DetailContent/DetailData'
import { useRecoilValue } from 'recoil'
import { userState } from '../../Recoil'

const DetailContent = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')
  const [detailData, setDetailData] = useState([])
  const navigate = useNavigate()
  const userInfo = useRecoilValue(userState)
  const [answerValue, setAnswerValue] = useState('')
  const [answerList, setAnswerList] = useState([])
  const [titleValue, setTitleValue] = useState('')
  const [contentValue, setContentValue] = useState('')
  const [author, setAuthor] = useState()

  const { questionId } = useParams()

  const detailContents = async () => {
    try {
      const json = await axios({
        url: `${url}/question/detail/${questionId}`,
        method: 'GET',
      })
      setDetailData(json.data)
      setAnswerList(json.data.answerList)
      setAuthor(json.data.memberId)
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
      data: {
        title: titleValue,
        content: contentValue,
      },
    })
  }

  const deleteCheck = () => {
    alert('게시물 삭제가 완료 되었습니다.')
    postDelete()
    navigate('/')
  }

  const answerCreate = async () => {
    await axios({
      url: `${url}/answer/create/${questionId}`,
      method: `POST`,
      data: {
        nickName: userInfo.data.nickname,
        content: answerValue,
      },
    })
  }

  const answerCheck = () => {
    if (answerValue === '') {
      alert('댓글 내용을 입력해주세요.')
    } else {
      answerCreate()
      alert('댓글 작성이 완료되었습니다.')
      detailContents()
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
    <div className="w-full sm:w-[1200px] md:w-[80%] h-[1187px] py-20 pt-20 p-[5%]">
      <div className="flex justify-end w-[100%]">
        {userInfo !== null ?
          (<div className='inline-block'>
            {
              userInfo.data.memberId == author ?
                <div>
                  <Link to={`/modify/${questionId}`}>
                    <button className="w-[100px] sm:w-[150px] h-[45px] bg-[#ABDEFF] rounded-full mr-4">
                      <p className="text-white">Edit</p>
                    </button>
                  </Link>
                  <button
                    onClick={deleteCheck}
                    className="w-[100px] sm:w-[150px] h-[45px] bg-[#ABDEFF] rounded-full"
                  >
                    <p className="text-white">Delete</p>
                  </button>
                </div>
                :
                <div>
                  <button
                    className="w-[100px] sm:w-[150px] h-[45px] bg-[#ABDEFF] rounded-full mr-4"
                    onClick={() => {
                      alert('접근 권한이 없습니다.')
                    }}
                  >
                    <p className="text-white">Edit</p>
                  </button>
                  <button
                    className="w-[100px] sm:w-[150px] h-[45px] bg-[#ABDEFF] rounded-full"
                    onClick={() => {
                      alert('접근 권한이 없습니다.')
                    }}
                  >
                    <p className="text-white">Delete</p>
                  </button>
                </div>
            }
          </div>)
          : (
            <div>
              <button
                className="w-[100px] sm:w-[150px] h-[45px] bg-[#ABDEFF] rounded-full mr-4"
                onClick={() => {
                  alert('접근 권한이 없습니다.')
                }}
              >
                <p className="text-white">Edit</p>
              </button>
              <button
                className="w-[100px] sm:w-[150px] h-[45px] bg-[#ABDEFF] rounded-full"
                onClick={() => {
                  alert('접근 권한이 없습니다.')
                }}
              >
                <p className="text-white">Delete</p>
              </button>
            </div>
          )}
      </div>
      <DetailData
        questionTitle={detailData.title}
        questionContent={detailData.content}
      />
      <form className="flex flex-row mt-10 ">
        <input
          type="text"
          placeholder="댓글을 작성하려면 로그인을 해주세요."
          className="flex items-center w-[75%] sm:w-[80%] md:w-[85%] h-[58px] bg-white rounded-3xl sm:ml-[5%] md:ml-0 p-6 mb-8"
          onClick={() => {
            if (userInfo.name === '') {
              alert('댓글을 작성하려면 로그인을 해주세요.')
            }
          }}
          onChange={(e) => {
            setAnswerValue(e.target.value)
          }}
        />
        <button
          className="w-[100px] sm:w-[150px] h-[58px] bg-[#ABDEFF] rounded-full ml-6"
          onClick={() => {
            answerCheck()
          }}
        >
          <p className="text-white">Submit</p>
        </button>
      </form>
      <div>
        {answerList.map((data, index) => (
          <div
            key={index}
            className="flex items-center w-[100%] h-[58px] bg-white rounded-3xl sm:ml-[5%] md:ml-0 p-6 mt-4"
          >
            <b className="pr-6 border-r-2">{data.nickname}</b>
            <p className="pl-6">{data.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DetailContent
