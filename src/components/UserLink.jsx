import React, { Component } from 'react';
import { Link } from '@reach/router';

class UserLink extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <Link to={`/users/${this.props.user.username}`}>
          Created by: {this.props.user.name}
        </Link>
      </div>
    );
  }
}

export default UserLink;
