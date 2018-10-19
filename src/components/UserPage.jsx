import React, { Component } from 'react';
import * as api from '../api';
import Loading from './Loading';
import { navigate } from '@reach/router';

class UserPage extends Component {
  state = {
    user: {},
    err: null
  };
  render() {
    if (!this.state.user.username)
      return (
        <div>
          <Loading />
        </div>
      );

    return (
      <div className="user-page">
        <div className="user-content">
          <img
            src={this.state.user.avatar_url}
            alt="user avatar"
            className="userPic"
          />
          <h2 className="user-username">
            User Name: {this.state.user.username}
          </h2>
          <h3 className="user-name">Name: {this.state.user.name}</h3>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getUser(this.state.user.username);
  }

  getUser(props) {
    const { username } = this.props;
    api
      .getUser(username)
      .then(user => {
        this.setState({
          user
        });
      })
      .catch(err => {
        navigate('/error', { replace: true, state: { msg: err.message } });
      });
  }
}

export default UserPage;
