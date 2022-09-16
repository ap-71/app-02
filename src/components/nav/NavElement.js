import React from 'react'
import { Link } from 'react-router-dom'
import { RoundedTop, RoundedBottom} from './Rounded'
import { config } from '../../config'

export function NavElement({ to, children, isActive, elementSize="40px"}){
    return (
        <>
            <div className={`relative my-5 flex w-[200px] rounded-l-full flex-col ${isActive ?'bg-[#FFFFFF] text-[#5459EA] transition duration-300 delay-300 ease-out': ''} font-[${config.style.font.family}]`}>
                <RoundedTop isActive={isActive}></RoundedTop>
                <RoundedBottom isActive={isActive}></RoundedBottom>
                <div className={`h-[${elementSize}] flex`}>
                    <Link to={to} className={`px-7 py-[4px] self-center`}>{children}</Link>
                </div>
            </div>
        </>
    )
}
