import React from 'react'

const Home = () => {
  return (
    <div>
      <div className="w-[1200px] h-[1187px] pt-20">
        <div className="flex flex-row w-[500px] h-[100px] ml-32">
          <div className="w-[100px] h-[100px] rounded-full bg-red-100"></div>
          <div className="w-[300px] bg-blue-200 ml-6">
            <h1>Lorem</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="flex flex-row ml-32 mt-20">
          <div className="w-[400px] h-[230px] bg-white mr-32 rounded-3xl drop-shadow-xl">
            <div className="w-[140px] h-[160px] bg-red-200"></div>
          </div>
          <div className="w-[400px] h-[230px] bg-white rounded-3xl drop-shadow-xl"></div>
        </div>
        <div className="flex flex-row ml-32 mt-20">
          <div className="w-[400px] h-[230px] bg-white mr-32 rounded-3xl"></div>
          <div className="w-[400px] h-[230px] bg-white rounded-3xl"></div>
        </div>
        <div className="flex flex-row ml-32 mt-20">
          <div className="w-[400px] h-[230px] bg-white mr-32 rounded-3xl"></div>
          <div className="w-[400px] h-[230px] bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  )
}

export default Home
