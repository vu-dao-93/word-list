import React, { Component } from 'react'

import SortButton from './SortButton'
import ColToSwap from './ColToSwap'

class THead extends Component {
  constructor(props) {
    super(props)
    this.state = {colToSwap: null, sortKey: ''}
    this._sortItems = this._sortItems.bind(this)
    this._startColSwap = this._startColSwap.bind(this)
    this._swapCol = this._swapCol.bind(this)
  }

  render() {
    return (
      <div className="th">
      {this._renderColToSwap()}
      {this.props.columns.map((col, cI) => (
        <div className="th__col" key={cI}>
          <div className="th__col__swap" onMouseDown={this._startColSwap} onMouseUp={this._swapCol}>{col}</div>
          <SortButton sortKey={this.state.sortKey} sortText={col} onClick={this._sortItems(col)}/>
        </div>
      ))}
      </div>
    )
  }

  _sortItems(key) {
    return () => {
      this.setState({sortKey: key})
      this.props.updateRows(key)
    }
  }

  _startColSwap(e) {
    e.preventDefault()
    this.setState({
      colToSwap: {
        text: e.target.innerHTML,
        left: e.target.offsetLeft,
        top: e.target.offsetTop
      }
    })
  }

  _swapCol(e) {
    e.preventDefault()
    let newCol = this.props.columns

    // Get old and new index of the column to swap
    const oldIndex = newCol.indexOf(this.state.colToSwap.text)
    const newIndex = newCol.indexOf(e.target.innerHTML)

    // Remove column at old index and add it at the new index
    newCol.splice(oldIndex, 1)
    newCol.splice(newIndex, 0, this.state.colToSwap.text)
    this.props.updateCols(newCol)
    this.setState({colToSwap: null})
  }

  _renderColToSwap() {
    if (this.state.colToSwap) {
      return (
        <ColToSwap col={this.state.colToSwap} />
      )
    }
  }
}

export default THead
