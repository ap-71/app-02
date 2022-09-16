import React from 'react'

export default function Table({ data = {} }) {

  return (
    <table className="table-auto">
        <thead>
            <tr>
                { data.head && data.head.map((thData, index) => <th key={ index }>{ thData }</th>) }
            </tr>
        </thead>
        <tbody>
            { data.body && data.body.map( (trData, indexTr) => <tr key={ indexTr }>{ trData.map((tdData, indexTd) => <td key={ indexTd }>{ tdData }</td>) }</tr> ) }
        </tbody>
    </table>
  )
}
