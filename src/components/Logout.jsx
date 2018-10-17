import React, { Component } from 'react';

class Logout extends Component {
  render() {
    return (
      <div className="logout">
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

export default Logout;
