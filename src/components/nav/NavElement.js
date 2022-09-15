import React from 'react'
import { Link } from 'react-router-dom'

export function NavElement({ to, children, isActive }){
    return (
        <div className={`flex w-[150px] rounded-l-full flex-col ${isActive && 'bg-[#FFFFFF] text-[#5459EA]   transition duration-300 delay-300 ease-out'}`}>
            <Link to={to} className={` h-[40px] px-5 py-2 '}`}>{children}</Link>
        </div>
        
    )
}