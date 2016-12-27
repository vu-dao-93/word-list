import React, { Component } from 'react'

class TBody extends Component {

  render() {
    return(
      <div>
      {this.props.rows.map((row, rI) => {
        return (
          <div className="tb__row" key={rI}>
          {this.props.columns.map((col, cI) => (
            <div className="tb__col" key={cI} >{row[col]}</div>
          ))}
          </div>
        )
      })}
      </div>
    )
  }
}

export default TBody
