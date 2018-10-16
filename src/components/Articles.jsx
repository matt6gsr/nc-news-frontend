import React, { Component } from 'react';
import { Link } from '@reach/router';
import UserLink from './UserLink';
import * as api from '../api';

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    if (!this.state.articles.length) return <p>loading...</p>;
    return (
      <div>
        <p>Articles</p>
        {this.state.articles.map(article => {
          return (
            <div key={article._id}>
              <Link to={`/articles/${article._id}`}>
                <div>{article.title}</div>
              </Link>
              <div>Topic: {article.belongs_to}</div>
              <UserLink user={article.created_by} />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    console.log('mounting...');
    !this.props.topic_slug ? this.getArticles() : this.getArticlesForTopic();
  }

  getArticles() {
    api.getArticles().then(articles => {
      this.setState({
        articles
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('updating...');
    if (prevProps.topic_slug !== this.props.topic_slug) {
      !this.props.topic_slug ? this.getArticles() : this.getArticlesForTopic();
    }
  }

  getArticlesForTopic() {
    api.getArticlesForTopic(this.props.topic_slug).then(articles => {
      this.setState({
        articles
      });
    });
  }
}

export default Articles;
