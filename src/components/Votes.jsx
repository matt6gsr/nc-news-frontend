import React, { Component } from 'react';
import * as api from '../api';

class Votes extends Component {
  state = {
    voteModifier: 0
  };
  render() {
    return (
      <div>
        <button onClick={() => this.changeVoteMod('up')}>+</button>
        <p>
          Rating:
          {this.props.votes + this.state.voteModifier}
        </p>
        <button onClick={() => this.changeVoteMod('down')}>-</button>
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

export default Votes;
