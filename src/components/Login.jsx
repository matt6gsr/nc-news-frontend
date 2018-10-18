import React, { Component } from 'react';

class Login extends Component {
  state = {
    username: 'tickle122'
  };
  render() {
    if (this.props.user.username) return this.props.children;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="username">please login to view content: </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <button>log in</button>
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
