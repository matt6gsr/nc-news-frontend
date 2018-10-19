import React, { Component } from 'react';
import { Link } from '@reach/router';
import UserLink from './UserLink';
import * as api from '../api';
import AddArticle from './AddArticle';
import { navigate } from '@reach/router';
import Loading from './Loading';

class Articles extends Component {
  state = {
    articles: [],
    err: null
  };
  render() {
    if (!this.state.articles.length)
      return (
        <div>
          <Loading />
        </div>
      );

    return (
      <div>
        <div className="articles-header">
          {this.props.topic_slug && <h2>articles / {this.props.topic_slug}</h2>}
          {this.props.topic_slug && (
            <AddArticle
              topic={this.props.topic_slug}
              userId={this.props.user._id}
              addArticle={this.addArticle}
            />
          )}
        </div>

        <div className="articles">
          {this.state.articles.map(article => {
            return (
              <div key={article._id} className="item">
                <Link to={`/articles/${article._id}`}>
                  <h2>{article.title}</h2>
                </Link>
                <div>Topic: {article.belongs_to}</div>
                <UserLink user={article.created_by} />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.getArticles(this.props.topic_slug);
  }

  getArticles(topic) {
    api
      .getArticles(topic)
      .then(articles => {
        this.setState({
          articles
        });
      })
      .catch(err => {
        console.log(err);
        navigate('/error', { replace: true, state: { msg: err.message } });
      });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.getArticles(this.props.topic_slug);
    }
  }

  addArticle = (title, body) => {
    const articleObj = { title, body, created_by: this.props.user._id };
    api.postArticle(this.props.topic_slug, articleObj).then(article => {
      this.setState({
        articles: [article, ...this.state.articles]
      });
    });
  };
}

export default Articles;
