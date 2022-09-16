import React from 'react'

export default function Container({ children }) {
  return (
    <div className='p-6 bg-white rounded h-[100%] w-[100%] text-red-500'>{ children }</div>
  )
}
