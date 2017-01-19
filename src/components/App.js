import React, { Component } from 'react';
import Waypoint from 'react-waypoint'
import 'font-awesome/css/font-awesome.min.css';
import {connect} from 'react-redux'

import logo from '../logo.svg';
import '../styles/App.scss';
import {getWordList} from '../actions/rowActions'
import TBody from './TBody'
import THead from './THead'

export class App extends Component {
  constructor() {
    super()
    this._getMoreWord = this._getMoreWord.bind(this)
  }

  componentWillMount() {
    this.props.dispatch(getWordList(10))
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
            <THead columns={this.props.columns}/>
            <div className="tb">
              <TBody rows={this.props.rowReducer.rows} columns={this.props.columns}/>
              {(!this.props.rowReducer.loading) && <Waypoint onEnter={this._getMoreWord}/>}
            </div>
          </div>
        </div>
      </div>
    );
  }

  _getMoreWord() {
    const currLastId = this.props.rowReducer.lastId
    if (currLastId.length) {
      this.props.dispatch(getWordList(5, this.props.rowReducer.lastId))
    }
  }
}

const mapStateToProps = store => ({
  rowReducer: store.rowReducer,
  columns: store.colReducer,
})

export default connect(mapStateToProps)(App);
