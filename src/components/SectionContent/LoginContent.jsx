import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRecoilState } from 'recoil'
import { userState } from '../../Recoil'
import { backand_url } from '../../util/url'

const LoginContent = () => {
  const [memberId, setMemberId] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useRecoilState(userState)
  const navigate = useNavigate()

  return (
    <div className="hero min-h-screen bg-base-200">
      <form
        onSubmit={async (e) => {
          e.preventDefault()
          try {
            const data = await axios({
              url: `${backand_url}/user/login`,
              method: 'POST',
              data: {
                memberId,
                password,
              },
            })
            setMemberId('')
            setPassword('')
            setUser(data, data)
            navigate('/')
            alert('로그인이 완료되었습니다.')
          } catch (e) {
            alert('로그인에 실패하였습니다.')
          }
        }}
      >
        <div className="hero-content block">
          <div className="text-center lg:text-left pb-6">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full w-[500px] shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">ID</span>
                </label>
                <input
                  type="text"
                  placeholder="ID"
                  className="input input-bordered h-[60px]"
                  value={memberId}
                  onChange={(e) => {
                    setMemberId(e.target.value)
                  }}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered h-[60px]"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                />
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary h-[60px]">Login</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginContent
