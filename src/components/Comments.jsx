import React, { Component } from 'react';
import Votes from './Votes';
import * as api from '../api';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div>
        <p>
          Comments:
          {this.state.comments.length}
        </p>
        {this.state.comments.map(comment => {
          return (
            <div key={comment._id}>
              <div> {comment.body}</div>
              <Votes id={comment._id} votes={comment.votes} type="comments" />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    this.getComments();
  }

  getComments(props) {
    const { articleId } = this.props;
    api.getComments(articleId).then(comments => {
      this.setState({
        comments
      });
    });
  }
}

export default Comments;