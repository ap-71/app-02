import React from 'react'
import Table from '../components/Table'
import BasePage from './BasePage'

export default class DevicesPage extends BasePage {
    constructor(){
        super()
        this.data = {
            head: [1,2,3,4],
            body: [[1,2,2,2]]
        }
    }
  children() {
    return (
        <>
            <Table data={ this.data }/>
        </>
    )
  }
}
