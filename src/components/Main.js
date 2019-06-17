/* eslint-disable react/no-unused-state */
/* eslint-disable no-cond-assign */
import React from 'react';
import Data from './Data/Data';
import Users from './Users/Users';
import { validateEmail } from '../libs/Helpers';

class Main extends React.Component {
  state = {};

  validateForm = () => {
    let { nickNameError, emailError, ipAdressError } = '';
    const { nickname, email, ipadress } = this.state;

    if (!nickname) {
      nickNameError = 'Please, provide nickname';
    }

    if (!ipadress) {
      ipAdressError = 'Please, provide Ip';
    }

    if (!validateEmail(email)) {
      emailError = 'Please, provide valid Email';
    }

    if (nickNameError || emailError || ipAdressError) {
      this.setState({ nickNameError, emailError, ipAdressError });
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
    const { nickNameError, emailError, ipAdressError } = this.state;

    return (
      <>
        <Data
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          nickNameError={nickNameError}
          emailError={emailError}
          ipAdressError={ipAdressError}
        />
        <Users />
      </>
    );
  }
}

export default Main;
