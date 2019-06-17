/* eslint-disable react/no-unused-state */
/* eslint-disable no-cond-assign */
import React from 'react';
import Data from './Data/Data';
import Users from './Users/Users';

class Main extends React.Component {
  state = {};

  validateForm = () => {
    let { nickNameError, emailError, ipError } = '';
    const { nickname, email, ipadress } = this.state;

    if (!nickname) {
      nickNameError = 'please provide Nickname';
    }

    if (!email) {
      emailError = 'please provideEmail';
    }

    if (!ipadress) {
      ipError = 'please provide Ip';
    }

    if (nickNameError || emailError || ipError) {
      this.setState({ nickNameError, emailError, ipError });
      return false;
    }

    return true;
  };

  onChange = event => {
    event.preventDefault();
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const validation = this.validateForm();

    if (validation) {
      alert('huuray');
    }
  };

  render() {
    return (
      <>
        <Data onChange={this.onChange} onSubmit={this.onSubmit} />
        <Users />
      </>
    );
  }
}

export default Main;
