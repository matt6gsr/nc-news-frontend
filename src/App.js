import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import TopicNavBar from './components/TopicNavBar';
import Articles from './components/Articles';
import Article from './components/Article';
import UserPage from './components/UserPage';
import Login from './components/Login';
import * as api from './api';

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="App">
        <Home />
        <Login login={this.login} user={this.state.user}>
          <TopicNavBar />
          <Router>
            <Articles path="/" />
            <Articles path="/topics/:topic_slug" user={this.state.user} />
            <Article path="/articles/:articleId" user={this.state.user} />
            <UserPage path="/users/:username" />
          </Router>
        </Login>
      </div>
    );
  }

  login = username => {
    api.getUser(username).then(user => {
      this.setState({
        user
      });
    });
  };
}

export default App;
