import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortButton from './SortButton'
import ColToSwap from './ColToSwap'
import {swapCol} from '../actions/colActions'
import {sortRows} from '../actions/rowActions'

export class THead extends Component {
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
      {(this.state.colToSwap) && <ColToSwap col={this.state.colToSwap} />}
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
      this.props.callSortRows(key)
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
    this.props.callSwapCol(this.state.colToSwap.text, e.target.innerHTML)
    this.setState({colToSwap: null})
  }

}

const mapStateToProps = store => ({
  columns: store.colReducer,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  callSwapCol: (target, dest) => {
    dispatch(swapCol(target, dest))
  },
  callSortRows: (key) => {
    dispatch(sortRows(key))
  }
})

THead.propTypes = {
  columns: React.PropTypes.array,
  callSortRows: React.PropTypes.func,
  callSwapCol: React.PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(THead)
