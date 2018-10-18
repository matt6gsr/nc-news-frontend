import React, { Component } from 'react';
import TopicNavLink from './TopicNavLink';
import * as api from '../api';

class TopicNavBar extends Component {
  state = {
    topics: []
  };
  render() {
    return (
      <nav>
        {this.state.topics.map(topic => {
          return (
            <div key={topic._id}>
              <TopicNavLink to={`/topics/${topic.slug}`}>
                {topic.slug}
              </TopicNavLink>
            </div>
          );
        })}
      </nav>
    );
  }

  getTopics() {
    api.getTopics().then(topics => {
      this.setState({
        topics
      });
    });
  }

  componentDidMount() {
    this.getTopics();
  }
}

export default TopicNavBar;
