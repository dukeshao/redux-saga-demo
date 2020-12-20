import React from 'react';
import { connect } from 'react-redux';

import * as types from './types'

class Effect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onGetData = this.onGetData.bind(this);
    this.waitChangeAsync = this.waitChangeAsync.bind(this);
  }
  onGetData() {
    this.props.dispatch({ type: types.fetchCategories })
  }
  waitChangeAsync() {
    this.props.dispatch({ type: types.waitChangeAsync })
  }
  render() {
    return (
      <div>
        <h4>Effect Page</h4>
        <button onClick={this.onGetData}>
          onGetData
        </button>
        {' '}
        <button onClick={this.waitChangeAsync}>
          waitChangeAsync
        </button>
        {' '}
        <ul>
          {this.props.effect.data && this.props.effect.data.length > 0 && this.props.effect.data.map(item => {
            return (
              <li key={item.name}>
                <p>name:{item.name}</p>
                <p>num:{item.childNum}</p>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
const stateToProp = state => {
  return {
    effect: state["effect"],
    app: state["app"]
  }
}
export default connect(stateToProp)(Effect);