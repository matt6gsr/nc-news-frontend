import React from 'react';
import { Link } from '@reach/router';
import dateFormat from 'dateformat';
import PropTypes from 'prop-types';

const UserLink = ({ user, created_at }) => {
  return (
    <div>
      <Link to={`/users/${user.username}`}>
        created by <strong>{user.name}</strong> on{' '}
        {dateFormat(created_at, 'dddd, mmmm dS, yyyy, h:MM:ss TT')}
      </Link>
    </div>
  );
};

UserLink.propTypes = {
  user: PropTypes.object.isRequired,
  created_at: PropTypes.string.isRequired
};

export default UserLink;
