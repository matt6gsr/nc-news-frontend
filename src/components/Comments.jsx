import React, { Component } from 'react';
import dateFormat from 'dateformat';
import Votes from './Votes';
import * as api from '../api';
import AddComment from './AddComment';
import DeleteComment from './DeleteComment';
import { Link } from '@reach/router';

class Comments extends Component {
  state = {
    comments: []
  };
  render() {
    return (
      <div className="comments-wrapper">
        <AddComment addComment={this.addComment} />
        <div className="comments">
          {this.state.comments.length > 0 ? (
            <h3>
              comments{' '}
              <span className="comments-count">
                {this.state.comments.length}
              </span>
            </h3>
          ) : (
            <span className="no-comment">
              be the first to comment on this article
            </span>
          )}
          {this.state.comments.map(comment => {
            return (
              <div className="comment" key={comment._id}>
                <div>
                  <div className="comment-name">
                    <Link to={`/users/${comment.created_by.username}`}>
                      <strong>{comment.created_by.name}</strong>{' '}
                    </Link>
                    commented on{' '}
                    {dateFormat(
                      comment.created_at,
                      'dddd, mmmm dS, yyyy, h:MM:ss TT'
                    )}
                  </div>
                  <div> {comment.body}</div>
                </div>
                <Votes id={comment._id} votes={comment.votes} type="comments" />
                {comment.created_by._id === this.props.user._id && (
                  <DeleteComment
                    deleteComment={() => this.deleteComment(comment._id)}
                  />
                )}
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
        comment.created_by = { name: this.props.user.name };
        this.setState({
          comments: [comment, ...this.state.comments]
        });
      });
  };

  deleteComment = id => {
    api.deleteComment(id).then(() => {
      this.setState({
        comments: this.state.comments.filter(comment => comment._id !== id)
      });
    });
  };
}

export default Comments;
