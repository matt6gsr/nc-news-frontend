import React, { Component } from 'react';

class AddComment extends Component {
  state = {
    body: ''
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          aria-label="comment body"
          onChange={this.handleChange}
          name="body"
          value={this.state.body}
          placeholder="Add Your Thoughts..."
        />
        <button>Post</button>
      </form>
    );
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.addComment(this.state.body);
    this.setState({
      body: ''
    });
  };
}

export default AddComment;
