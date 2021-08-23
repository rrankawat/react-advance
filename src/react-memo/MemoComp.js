import React, { memo } from 'react'

const MemoComp = ({ name }) => {
  console.log('Memo Component')

  return <div></div>
}

export default memo(MemoComp)
