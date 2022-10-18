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
  console.log(contentHeight)
  useEffect(() => {
    boxHeight()
  }, [ref])

  return (
    <div>
      <div className="leading-[75px] w-[1024px] h-[75px] bg-white rounded-3xl ml-32 mt-10">
        <p className="text-lg p-6">{questionTitle}</p>
      </div>
      <div
        className={
          contentHeight > 600
            ? ' w-[1024px] bg-white rounded-3xl ml-32 mt-10'
            : ' w-[1024px] h-[600px] bg-white rounded-3xl ml-32 mt-10'
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
