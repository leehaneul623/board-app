import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useRef } from 'react'

const DetailData = ({ questionTitle, questionContent }) => {
  const ref = useRef(null)

  const [contentHeight, setContentHeight] = useState(0)
  const boxHeight = () => {
    setContentHeight(ref.current.offsetHeight)
  }

  useEffect(() => {
    boxHeight()
  }, [ref])

  return (
    <div>
      <div className="leading-[75px] sm:w-[83%] w-[90%] h-[75px] bg-white rounded-3xl sm:ml-32 ml-[5%] mt-10">
        <p className="text-lg p-6">{questionTitle}</p>
      </div>
      <div
        className={
          contentHeight > 600
            ? ' sm:w-[83%] w-[90%] bg-white rounded-3xl sm:ml-32 ml-[5%] mt-10'
            : ' sm:w-[83%] w-[90%] h-[600px] bg-white rounded-3xl sm:ml-32 ml-[5%] mt-10'
        }
      >
        <p ref={ref} className="text-lg p-4">
          {questionContent}
        </p>
      </div>
    </div>
  )
}

export default DetailData
