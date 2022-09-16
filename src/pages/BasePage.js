import React, { Component } from 'react'

export default class BasePage extends Component {
  children(){
    return <div>BasePage</div>
  }
  render() {
    return <div className='p-6 bg-white rounded-[20px] h-[100%] w-[100%] text-red-500'>{ this.children() }</div>
  }
}
