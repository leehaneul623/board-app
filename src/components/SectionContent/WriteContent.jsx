import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { BsChatDots } from 'react-icons/bs'
import { url } from '../../util/url'
import { useNavigate } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { userState } from '../../Recoil'


const WriteContent = () => {
  const navigate = useNavigate()
  const userInfo = useRecoilValue(userState)
  const [writeData, setWriteData] = useState({
    writeTitle: '',
    writeContent: '',
    writeCategory: '',
  })
  const [item, setItem] = useState('none')
  const writeCheck = () => {
    if (writeData.writeTitle == "") {
      alert('제목을 입력해주세요.')
    } else if (writeData.writeContent == "") {
      alert('내용을 입력해주세요.')
    } else if (item == "none") {
      alert('항목을 다시 확인해주세요.')
    } else {
      writeCreate();
      alert("작성이 완료 되었습니다.")
      navigate("/")
    }
  }

  console.log(userInfo.data.memberId);

  const writeCreate = async (event) => {
    setWriteData(() => {
      return {
        writeTitle: '',
        writeContent: '',
      }
    })
    const json = await axios({
      url: `${url}/question/write?title=${writeData.writeTitle}&content=${writeData.writeContent}&category=${item}&memberId=${userInfo.data.memberId}`,
      method: 'GET',
    })
  }

  const option = (e) => {
    setItem(e.target.value)
  }

  return (
    <div className="sm:w-[1200px] w-[450px] h-[1187px] pt-20">
      <div className="sm:flex flex-row justify-around mt-16 text-xl">
        <div className="flex mt-4">
          <BsChatDots />
          <p className="ml-4 sm:mb-0 mb-6">자유롭게 작성해주세요.</p>
        </div>
        <select
          className="select select-info w-full max-w-xs"
          onChange={option}
        >
          <option value="none">Category</option>
          <option value="Knowledge">Knowledge</option>
          <option value="Music">Music</option>
          <option value="Exercise">Exercise</option>
          <option value="Cooking">Cooking</option>
          <option value="Etc">Etc</option>
        </select>
      </div>
      <input
        type="text"
        className="flex items-center sm:w-[83%] w-[95%] h-[7%] bg-white rounded-3xl sm:ml-32 mt-10 pl-4 outline-none"
        placeholder="제목을 입력해주세요."
        value={writeData.writeTitle}
        onChange={(e) => {
          setWriteData((prev) => {
            return { ...prev, writeTitle: e.target.value }
          })
        }}
      />
      <textarea
        type="text"
        className="sm:w-[83%] w-[95%] sm:h-[50%] h-[45%] bg-white rounded-3xl sm:ml-32 mt-14 pl-4 p-4"
        placeholder="내용을 입력해주세요."
        value={writeData.writeContent}
        onChange={(e) => {
          setWriteData((prev) => {
            return { ...prev, writeContent: e.target.value }
          })
        }}
      ></textarea>
      <button
        className="sm:w-[150px] w-[120px] sm:h-[60px] h-[50px] bg-[#49A9E8] rounded-full sm:mt-14 mt-12 sm:ml-[80%] ml-[68%]"
        onClick={writeCheck}
      >
        <p className="text-white">Submit</p>
      </button>

    </div>
  )
}

export default WriteContent
