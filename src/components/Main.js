import React from 'react';
import Data from './Data/Data';
import Users from './Users/Users';

class Main extends React.Component {
  state = {};

  onChange = event => {
    event.preventDefault();
    console.log('hi');
  };

  onSubmit = event => {
    event.preventDefault();
    console.log('click');
  };

  render() {
    return (
      <>
        <Data onChange={this.onChange} />
        <Users />
      </>
    );
  }
}

export default Main;
