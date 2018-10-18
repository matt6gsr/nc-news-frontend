import React, { Component } from 'react';

class AddComment extends Component {
  state = {
    body: ''
  };
  render() {
    return (
      <div className="comment-add">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            aria-label="comment body"
            onChange={this.handleChange}
            name="body"
            value={this.state.body}
            placeholder="add your thoughts..."
          />
          <button>submit comment</button>
        </form>
      </div>
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
