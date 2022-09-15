import React from 'react'
import { useLocation } from 'react-router-dom'
import { NavElement } from './NavElement'


export function Navigation(){
  const location = useLocation()

  const menu = {
    Main: '/',
    Backups: '/backups',
    Management: '/mng',
    Options: '/options',
  }
  return (<>
    <nav className='mt-6'>
      <span>
        {Object.keys(menu).map((key, index) =>  <NavElement to={menu[key]} key={index} isActive={location.pathname === menu[key]} >{key}</NavElement> )}
      </span>
    </nav>
    </>
  )
}