import React, { Component } from 'react';
import * as api from '../api';
import PropTypes from 'prop-types';

class Votes extends Component {
  state = {
    voteModifier: 0
  };
  render() {
    return (
      <div className="votes">
        <button
          className="button-down"
          onClick={() => this.changeVoteMod('down')}
          disabled={this.state.voteModifier === -1}
        >
          -
        </button>
        <span className="rating">
          {this.props.votes + this.state.voteModifier}
        </span>
        <button
          className="button-up"
          onClick={() => this.changeVoteMod('up')}
          disabled={this.state.voteModifier === 1}
        >
          +
        </button>
      </div>
    );
  }

  changeVoteMod = direction => {
    const newVoteMod = direction === 'up' ? 1 : -1;
    this.setState({
      voteModifier: newVoteMod
    });
    api.vote(this.props.id, this.props.type, direction).catch(err => {
      this.setState({
        voteModifier: 0
      });
    });
  };
}

Votes.propTypes = {
  id: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default Votes;
