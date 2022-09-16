import React from 'react'

export function RoundedTop({isActive=false}) {
  return (
    <div className={ `absolute right-0 h-[20px] w-[20px] top-[-20px] ` + (isActive ? 'bg-white transition duration-300 delay-300 ease-out' : '')  }>
      <div className={`${isActive ? 'bg-black ' : ''} right-0 h-[20px] w-[20px] rounded-br-[20px]`} > </div>
    </div>
  )
}

export function RoundedBottom({isActive=false}) {
  return (
    <div className={ `absolute right-0 h-[20px] w-[20px] bottom-[-20px] ` + (isActive ? 'bg-white transition duration-300 delay-300 ease-out' : '')  }>
      <div className={`${isActive ? 'bg-black ' : ''} right-0 h-[20px] w-[20px] rounded-tr-[20px]`} > </div>
    </div>
  )
}