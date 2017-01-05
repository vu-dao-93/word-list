import React, { Component } from 'react'
import '../styles/ColToSwap.scss'

class ColToSwap extends Component {

  render() {
    const style = {
      left: `${this.props.col.left}px`,
      top: `${this.props.col.top}px`,
    }
    return (
      <div className="col-to-swap" style={style} ref="column">
        <div className="th">
          <div className="th__col">
            <div className="th__col__swap">
            {this.props.col.text}
            </div>
          </div>
        </div>
      </div>
    )
  }

  componentDidMount() {
    let movementX = 0
    let movementY = 0
    document.onmousemove = (e) => {
      e.preventDefault()
      movementX += e.movementX
      movementY += e.movementY
      this.refs.column.style.setProperty('transform', `translate(${movementX}px, ${movementY}px)`)
    }
  }

  componentWillUnmount() {
    document.onmousemove = null
  }
}

export default ColToSwap
