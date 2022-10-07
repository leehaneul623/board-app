import React from 'react'

const LoginContent = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content block">
        <div className="text-center lg:text-left">
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
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="password"
                className="input input-bordered h-[60px]"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary h-[60px]">Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginContent
