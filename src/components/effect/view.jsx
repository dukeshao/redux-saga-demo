import React from 'react';
import { connect } from 'react-redux';

class Effect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <h4>Effect Page</h4>
      </div>
    )
  }
}
const stateToProp = state => {
  return {
    app: state["app"]
  }
}
export default connect(stateToProp)(Effect);