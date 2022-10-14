import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { BsFillEmojiSmileFill, BsFillHeartFill } from 'react-icons/bs'
import { backand_url } from '../../util/url'

const SignUpContent = () => {
  const [memberId, setMemberId] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [name, setName] = useState('')
  const [nickName, setNickName] = useState('')

  return (
    <div className="w-[1200px] h-[1187px] pt-20">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            const data = await axios({
              url: `${backand_url}/user/join`,
              method: 'POST',
              data: {
                memberId,
                password,
                passwordConfirmation,
                name,
                nickName,
              },
            })
            setMemberId('')
            setPassword('')
            setPasswordConfirmation('')
            setName('')
            setNickName('')
            alert('회원가입이 완료되었습니다.')
          } catch (e) {
            console.log(e)
            alert('회원가입에 실패하였습니다.')
          }
        }}
      >
        <div className="flex flex-row text-2xl ml-32 mt-8">
          <BsFillEmojiSmileFill className="mr-1" />
          <BsFillHeartFill className="mr-4" />
          <h2>welcome to who !</h2>
        </div>
        <div className="ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">ID</div>
          <input
            type="text"
            className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="ID"
            value={memberId}
            onChange={(e) => {
              setMemberId(e.target.value)
            }}
          />
        </div>
        <div className="ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">Password</div>
          <input
            type="password"
            className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
          ></input>
        </div>
        <div className="ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">Password Confirmation</div>
          <input
            type="password"
            className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="Password"
            value={passwordConfirmation}
            onChange={(e) => {
              setPasswordConfirmation(e.target.value)
            }}
          ></input>
        </div>
        <div className="ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">Name</div>
          <input
            type="text"
            className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          ></input>
        </div>
        <div className="ml-32 mt-10">
          <div className="ml-4 mb-2 text-lg">NickName</div>
          <input
            type="text"
            className="w-[1024px] h-[60px] bg-white rounded-3xl shadow-md pl-4"
            placeholder="NickName"
            value={nickName}
            onChange={(e) => {
              setNickName(e.target.value)
            }}
          ></input>
        </div>
        <button
          type="submit"
          className="w-[150px] h-[60px] bg-[#49A9E8] rounded-full mt-14 ml-[1000px]"
        >
          <p className="text-white">Submit</p>
        </button>
      </form>
    </div>
  )
}

export default SignUpContent
