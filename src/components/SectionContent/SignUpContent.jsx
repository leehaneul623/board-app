import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { BsFillEmojiSmileFill, BsFillHeartFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { url } from '../../util/url'

const SignUpContent = () => {
  const [memberId, setMemberId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('')
  const [nickname, setNickname] = useState('')
  const navigate = useNavigate()

  const join = async (e) => {
    try {
      const data = await axios({
        url: `${url}/api/v1/user/join`,
        method: 'POST',
        data: {
          memberId,
          password,
          passwordConfirmation,
          name,
          nickname,
        },
      })
      setMemberId('')
      setPassword('')
      setPasswordConfirmation('')
      setName('')
      setNickname('')
      alert('회원가입이 완료되었습니다.')
    } catch (e) {
      alert('회원가입에 실패하였습니다.')
    }
    navigate('/')
  }

  const passwordCheck = () => {
    if (password !== passwordConfirmation) {
      alert("비밀번호가 일치 하지 않습니다.")
    } else { join() }
  }

  return (
    <div className="w-full sm:w-[1200px] h-[1187px] pt-20">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          passwordCheck()
        }}
      >
        <div className="flex text-2xl ml-[10%] sm:ml-34 md:ml-32 mt-8">
          <BsFillEmojiSmileFill className="mr-1" />
          <BsFillHeartFill className="mr-4" />
          <h2>welcome to who !</h2>
        </div>
        <div className="ml-[10%] sm:ml-34 md:ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">ID</div>
          <input
            type="text"
            className="w-[85%] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="ID"
            value={memberId}
            onChange={(e) => {
              setMemberId(e.target.value)
            }}
          />
        </div>
        <div className="ml-[10%] sm:ml-34 md:ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">Password</div>
          <input
            type="password"
            className="w-[85%] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)

              console.log(e.target.value)
            }}
          />
        </div>
        <div className="ml-[10%] sm:ml-34 md:ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">Password Confirmation</div>
          <input
            type="password"
            className="w-[85%] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="Password"
            value={passwordConfirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value)
            }}
          />
        </div>
        <div className="ml-[10%] sm:ml-34 md:ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">Name</div>
          <input
            type="text"
            className="w-[85%] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="ml-[10%] sm:ml-34 md:ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">NickName</div>
          <input
            type="text"
            className="w-[85%] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="NickName"
            value={nickname}
            onChange={(e) => {
              setNickname(e.target.value)
            }}
          />
        </div>
        <button
          type="submit"
          className="w-[120px] sm:w-[150px] h-[60px] bg-[#49A9E8] rounded-full mt-14 ml-[58%] sm:ml-[60%] md:ml-[65%] lg:ml-[70%]"
        >
          <p className="text-white">Submit</p>
        </button>
      </form>
    </div>
  )
}

export default SignUpContent
