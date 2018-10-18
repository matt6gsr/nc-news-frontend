import React, { Component } from 'react';
import { Link } from '@reach/router';
import dateFormat from 'dateformat';

class UserLink extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <Link to={`/users/${this.props.user.username}`}>
          created by {this.props.user.name} on{' '}
          {dateFormat(this.props.created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
        </Link>
      </div>
    );
  }
}

export default UserLink;
