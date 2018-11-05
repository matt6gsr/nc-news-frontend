import React, { Component } from 'react';
import * as api from '../api';
import UserLink from './UserLink';
import Comments from './Comments';
import Votes from './Votes';
import { navigate } from '@reach/router';
import Loading from './Loading';
import PropTypes from 'prop-types';

class Article extends Component {
  state = {
    article: {}
  };
  render() {
    if (!this.state.article.title)
      return (
        <div>
          <Loading />
        </div>
      );

    return (
      <div className="single-article">
        <div className="single-article-content">
          <h1>{this.state.article.title}</h1>

          <UserLink
            user={this.state.article.created_by}
            created_at={this.state.article.created_at}
          />

          <p>{this.state.article.body}</p>

          <Votes
            id={this.state.article._id}
            votes={this.state.article.votes}
            type="articles"
          />
        </div>
        <Comments articleId={this.state.article._id} user={this.props.user} />
      </div>
    );
  }

  componentDidMount() {
    this.getArticle(this.props.articleId);
  }

  getArticle(articleId) {
    api
      .getArticle(articleId)
      .then(article => {
        this.setState({
          article
        });
      })
      .catch(err => {
        navigate('/error', { replace: true, state: { msg: err.message } });
      });
  }
}

Article.propTypes = {
  user: PropTypes.object.isRequired
};

export default Article;
