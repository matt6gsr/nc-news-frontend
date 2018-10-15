import React, { Component } from 'react';
import * as api from '../api';
import UserLink from './UserLink';
import Comments from './Comments';
import Votes from './Votes';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    if (!this.state.article.title) return <p>loading...</p>;
    return (
      <div>
        <h1>{this.state.article.title}</h1>
        <div>
          <UserLink user={this.state.article.created_by} />
        </div>
        <p>{this.state.article.body}</p>
        <Votes
          id={this.state.article._id}
          votes={this.state.article.votes}
          type="articles"
        />
        <Comments articleId={this.state.article._id} />
      </div>
    );
  }

  componentDidMount() {
    this.getArticle(this.props.match.params.articleId);
  }

  getArticle(articleId) {
    api.getArticle(articleId).then(article => {
      this.setState({
        article
      });
    });
  }
  componentDidUpdate() {
    const id = this.props.match.params._id;
    if (id) {
      this.getArticle(id);
    }
  }
}

export default Article;
