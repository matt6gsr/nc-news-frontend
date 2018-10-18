import React, { Component } from 'react';

class AddArticle extends Component {
  state = {
    title: '',
    body: ''
  };
  render() {
    return (
      <div className="add-article">
        <p>add an article to this topic</p>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title_input">title: </label>
          <input
            type="text"
            name="title"
            id="title_input"
            placeholder="article title"
            onChange={this.handleChange}
          />
          <label htmlFor="article_body">article: </label>
          <input
            type="text"
            name="body"
            id="article_input"
            placeholder="write your article"
            onChange={this.handleChange}
          />
          <button>post your article</button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.addArticle(this.state.title, this.state.body);
    this.setState({
      title: '',
      body: ''
    });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
}

export default AddArticle;
