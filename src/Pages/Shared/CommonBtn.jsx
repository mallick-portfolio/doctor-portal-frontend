import React from 'react'

const CommonBtn = ({children}) => {
  return (
    <button className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white">{children}</button>
  )
}

export default CommonBtn
