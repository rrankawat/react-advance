import React, { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
const MAX_COUNT_ALLOWED = 5

const ClickCounter = () => {
  const handleError = useErrorHandler()

  const [count, setCount] = useState(0)

  const handleClick = () => {
    try {
      if (count === MAX_COUNT_ALLOWED) {
        throw new Error('Count limit exceeded')
      } else {
        setCount(preState => preState + 1)
      }
    } catch (error) {
      handleError(error)
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Counter {count}</button>
    </div>
  )
}

export default ClickCounter
