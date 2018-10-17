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
import LoggedInUser from './components/LoggedInUser';

class App extends Component {
  state = {
    user: {}
  };
  render() {
    return (
      <div className="App">
        <header>
          <Home />
          <TopicNavBar />
        </header>
        <Login login={this.login} user={this.state.user}>
          <LoggedInUser user={this.state.user} logout={this.logout} />
          <Router>
            <Articles path="/" user={this.state.user} />
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

  logout = () => {
    this.setState({
      user: {}
    });
  };
}

export default App;
