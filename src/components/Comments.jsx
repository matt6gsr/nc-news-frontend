import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Votes from './Votes';
import * as api from '../api';
import AddComment from './AddComment';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div className="comments-wrapper">
        <AddComment addComment={this.addComment} />
        <div className="comments">
          <h3>
            Comments{' '}
            <span className="comments-count">{this.state.comments.length}</span>
          </h3>
          {this.state.comments.map(comment => {
            return (
              <div className="comment" key={comment._id}>
                <div>
                  <div className="comment-name">
                    <strong>{comment.created_by.name}</strong> commented on{' '}
                    {dateFormat(
                      comment.created_at,
                      'dddd, mmmm dS, yyyy, h:MM:ss TT'
                    )}
                  </div>
                  <div> {comment.body}</div>
                </div>
                <Votes id={comment._id} votes={comment.votes} type="comments" />
              </div>
            );
          })}
        </div>
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

  addComment = body => {
    api
      .postComment(this.props.articleId, body, this.props.user._id)
      .then(comment => {
        this.setState({
          comments: [comment, ...this.state.comments]
        });
      });
  };
}

export default Comments;
