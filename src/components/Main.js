import React from 'react';
import Data from './Data/Data';
import Users from './Users/Users';

class Main extends React.Component {
  state = {};

  render() {
    return (
      <>
        <Data />
        <Users />
      </>
    );
  }
}

export default Main;
