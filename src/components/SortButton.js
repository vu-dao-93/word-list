import React, { Component } from 'react'
import '../styles/SortButton.scss'

class SortButton extends Component {
  constructor(props) {
    super(props);
    this._getSortClass = this._getSortClass.bind(this);
  }

  render() {
    return (
      <div className="th__col__sort" onClick={this.props.onClick}>
        <i className={this._getSortClass() + ' fa fa-caret-down'}></i>
      </div>
    )
  }

  _getSortClass() {
    return (this.props.sortText === this.props.sortKey)? 'active': ''
  }
}

export default SortButton
