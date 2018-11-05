import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Logout extends Component {
  render() {
    return (
      <div className="logout">
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired
};

export default Logout;
