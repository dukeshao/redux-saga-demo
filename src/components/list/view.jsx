import React from 'react';
import { connect } from 'react-redux';
import * as types from './types'
import * as appTypes from '../types'

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.onIncrement = this.onIncrement.bind(this)
    this.onIncrementAsync = this.onIncrementAsync.bind(this)
    this.onDecrement = this.onDecrement.bind(this)
    this.loginIn = this.loginIn.bind(this)
    this.loginOut = this.loginOut.bind(this)
  }

  onIncrement() {
    this.props.dispatch({ type: types.increment })
  }
  onIncrementAsync() {
    this.props.dispatch({ type: types.increment_async, name: "duke shao" })
  }
  onDecrement() {
    this.props.dispatch({ type: types.decrement })
  }

  loginIn() {
    this.props.dispatch({
      type: appTypes.loginInAsync, info: {
        name: "duke",
        phone: "18620940103",
        login: "true"
      }
    })
  }
  loginOut() {
    this.props.dispatch({ type: appTypes.loginOutAsync })
  }

  render() {
    const info = this.props.app.info;
    return (
      <div>
        <h4>List Page</h4>
        <p>姓名:{info.name}</p>
        <p>手机:{info.phone}</p>
        <p>登录状态:{info.login}</p>
        <button onClick={this.onIncrementAsync}>
          Increment after 1 second
        </button>
        {' '}
        <button onClick={this.onIncrement}>
          Increment
        </button>
        {' '}
        <button onClick={this.onDecrement}>
          Decrement
        </button>
        {' '}
        <button onClick={this.loginIn}>
          登录
        </button>
        {' '}
        <button onClick={this.loginOut}>
          登出
        </button>
        <hr />
        <div>
          Clicked: {this.props.current.count} times
        </div>
      </div>
    )
  }
}
const stateToProp = state => {
  return {
    current: state["list"],
    app: state["app"]
  }
}
export default connect(stateToProp)(List);