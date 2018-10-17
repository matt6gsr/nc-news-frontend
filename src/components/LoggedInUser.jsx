import React, { Component } from 'react';
import Logout from './Logout';

class LoggedInUser extends Component {
  render() {
    return (
      <div className="user">
        <img
          src={this.props.user.avatar_url}
          alt="user avatar"
          className="avatar"
        />
        <span>{this.props.user.username}</span>
        <Logout />
      </div>
    );
  }
}

export default LoggedInUser;
