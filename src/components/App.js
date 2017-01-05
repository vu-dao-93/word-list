import React, { Component } from 'react';
import Waypoint from 'react-waypoint'
import logo from '../logo.svg';
import 'font-awesome/css/font-awesome.min.css';
import '../styles/App.scss';
import apiCall from '../services/apiCall'

import TBody from './TBody'
import THead from './THead'

const columns = ['word', 'points', 'pickRate', 'successRate']

class App extends Component {
  constructor() {
    super()
    this.state = { rows: [], columns: columns, loading: false, lastId: '' }
    this._updateRows = this._updateRows.bind(this)
    this._updateCols = this._updateCols.bind(this)
    this._renderWaypoint = this._renderWaypoint.bind(this)
    this._getMoreWord = this._getMoreWord.bind(this)
  }

  componentDidMount() {
    apiCall.getWordList(10).then((res) => {
      this.setState({
        lastId: res[res.length-1].id,
        rows: res,
      })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <div className="table">
            <THead columns={this.state.columns} updateCols={this._updateCols} updateRows={this._updateRows}/>
            <div className="tb">
              <TBody rows={this.state.rows} columns={this.state.columns}/>
              {this._renderWaypoint()}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _updateRows(key) {
    this.setState({
      rows: this.state.rows.sort((a, b) => {
        const sortedArray = [ a[key], b[key] ].sort()
        const aKeyIndex = sortedArray.indexOf(a[key])
        const bKeyIndex = sortedArray.indexOf(b[key])
        return aKeyIndex - bKeyIndex
      })
    })
  }

  _updateCols(newCol) {
    this.setState({columns: newCol})
  }

  _renderWaypoint() {
    if (!this.state.loading) {
      return (
        <Waypoint onEnter={this._getMoreWord}/>
      )
    }
  }

  _getMoreWord() {
    let rows = this.state.rows;

    if (this.state.lastId.length) { // Stop function from calling when component just mount
      this.setState({ loading: true });
      apiCall.getWordList(5, this.state.lastId).then((list) => {
        if (!list.length) return; // Stop function from calling after all items have been retrieved
        rows = rows.concat(list)
        this.setState({rows: rows, loading: false, lastId: rows[rows.length-1].id})
      })
    }
  }
}

export default App;
