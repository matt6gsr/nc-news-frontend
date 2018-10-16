import React from 'react';
import TopicNavLink from './TopicNavLink';

const TopicNavBar = () => {
  return (
    <div>
      <nav>
        <TopicNavLink to="/topics/coding/">Coding</TopicNavLink>
        {' | '}
        <TopicNavLink to="/topics/football/">Football</TopicNavLink>
        {' | '}
        <TopicNavLink to="/topics/cooking/">Cooking</TopicNavLink>
      </nav>
    </div>
  );
};

export default TopicNavBar;
