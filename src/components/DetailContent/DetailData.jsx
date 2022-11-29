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
      <div className="leading-[75px] w-[100%] h-[75px] bg-white rounded-3xl sm:ml-[5%] md:ml-0 mt-10">
        <p className="text-lg p-6">{questionTitle}</p>
      </div>
      <pre
        className={
          contentHeight > 600
            ? 'w-[100%] bg-white rounded-3xl sm:ml-[5%] md:ml-0 mt-10 whitespace-pre-wrap'
            : 'w-[100%] h-[600px] bg-white rounded-3xl sm:ml-[5%] md:ml-0 mt-10 whitespace-pre-wrap'
        }
      >
        <p ref={ref} className="text-lg p-4">
          {questionContent}
        </p>
      </pre>
    </div>
  )
}

export default DetailData
