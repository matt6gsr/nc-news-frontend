import React, { Component } from 'react';
import { Link } from '@reach/router';
import UserLink from './UserLink';
import * as api from '../api';
import AddArticle from './AddArticle';

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    if (!this.state.articles.length) return <p>loading...</p>;

    return (
      <div>
        <div className="articles-header">
          {this.props.topic_slug && <h2>Articles / {this.props.topic_slug}</h2>}
          {this.props.topic_slug && (
            <AddArticle
              topic={this.props.topic_slug}
              userId={this.props.user._id}
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
    this.getArticles();
  }

  getArticles(url) {
    api.getArticles(url).then(articles => {
      this.setState({
        articles
      });
    });
  }

  componentDidUpdate(prevProps) {
    console.log(this.props.topic_slug);
    if (prevProps.topic_slug !== this.props.topic_slug) {
      this.getArticles(this.props.topic_slug);
    }
  }
}

export default Articles;
