import React from 'react';
import { css } from 'react-emotion';
import { RingLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  padding-top: 20px;
`;

class Loading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }
  render() {
    return (
      <div className="sweet-loading">
        <RingLoader
          className={override}
          sizeUnit={'px'}
          size={100}
          color={'#c50e2d'}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default Loading;
