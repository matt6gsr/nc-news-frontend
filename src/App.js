import React, { Component } from 'react';
import { Router } from '@reach/router';
import './App.css';
import Home from './components/Home';
import TopicNavBar from './components/TopicNavBar';
import Articles from './components/Articles';

class App extends Component {
  state = {
    user: {
      name: 'Jess Jelly',
      username: 'jessjelly',
      id: '5b9f6f84588c0f610ccb5ff8',
      avatar_url:
        'https://s-media-cache-ak0.pinimg.com/564x/39/62/ec/3962eca164e60cf46f979c1f57d4078b.jpg'
    },
    userLoggedIn: true
  };
  render() {
    return (
      <div className="App">
        <Home />
        <TopicNavBar />
        <Router>
          <Articles path="/" />
        </Router>
      </div>
    );
  }
}

export default App;
