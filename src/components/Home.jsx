import React from 'react';
import { Link } from '@reach/router';
import northcodersLogo from '../images/northcodersN.png';

const Home = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src={northcodersLogo} alt="NC NEWS" />
      </Link>
    </div>
  );
};

export default Home;
