import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavElement } from './NavElement'
import { config } from '../../config'

export function Navigation(){
  const location = useLocation()
  const paths =  Object.keys(config.menu).filter(key => config.menu[key].page !== '' && config.menu[key].page !== undefined)
  
  return (<>
    <nav className='my-10'>
      <span className={`pl-7 text-white opacity-60 font-[${config.style.font.family}]`}>MAIN MENU</span>
      <div>
        { paths.map(key =>  <NavElement to={config.menu[key].path} key={config.menu[key].index} isActive={location.pathname === config.menu[key].path} >{key}</NavElement> ) } 
      </div>
    </nav>
    </>
  )
}