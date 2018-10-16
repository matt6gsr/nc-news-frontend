import React, { Component } from 'react';
import * as api from '../api';

class UserPage extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div>
        <p>
          User Name:
          {this.state.user.username}
        </p>
        <p>
          Name:
          {this.state.user.name}
        </p>
        <img src={this.state.user.avatar_url} alt="user avatar" />
      </div>
    );
  }

  componentDidMount() {
    this.getUser(this.state.user.username);
  }

  getUser(props) {
    const { username } = this.props;
    api.getUser(username).then(user => {
      this.setState({
        user
      });
    });
  }
}

export default UserPage;
