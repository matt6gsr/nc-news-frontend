import React, { Component } from 'react';
import Logout from './Logout';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';

class LoggedInUser extends Component {
  render() {
    return (
      <Link to={`/users/${this.props.user.username}`}>
        <div className="user">
          <img
            src={this.props.user.avatar_url}
            alt="user avatar"
            className="avatar"
          />
          <span>{this.props.user.username}</span>
          <Logout logout={this.props.logout} />
        </div>
      </Link>
    );
  }
}

LoggedInUser.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default LoggedInUser;
