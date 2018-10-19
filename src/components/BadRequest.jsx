import React from 'react';

const BadRequest = props => {
  return (
    <div>
      <h1>Bad Request</h1>
      <h2>{props.location.state.msg}</h2>
    </div>
  );
};

export default BadRequest;
