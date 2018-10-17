import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: ''
  };
  render() {
    if (this.props.user.username) return this.props.children;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">Please Login To View Content: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <button>Log In</button>
      </form>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
  };

  handleChange = event => {
    this.setState({
      username: event.target.value
    });
  };
}

export default Login;
