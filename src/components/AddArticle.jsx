import React, { Component } from 'react';
import * as api from '../api';

class AddArticle extends Component {
  state = {
    title: '',
    body: ''
  };
  render() {
    return (
      <div className="add-article">
        <p>Add An Article To This Topic</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title_input">Title: </label>
          <input
            type="text"
            name="title"
            id="title_input"
            placeholder="Article Title"
            onChange={this.handleChange}
          />
          <label htmlFor="article_body">Article: </label>
          <input
            type="text"
            name="body"
            id="article_input"
            placeholder="Write Your Article"
            onChange={this.handleChange}
          />
          <button>Post Your Article</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    const { userId, topic } = this.props;
    const { title, body } = this.state;
    event.preventDefault();
    api.postArticle(topic, { title, body, userId });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
}

export default AddArticle;
