/* eslint-disable react/no-unused-state */
/* eslint-disable no-cond-assign */
import React from 'react';
import Data from './Data/Data';
import Users from './Users/Users';
import { validateEmail, validateIPaddress } from '../libs/Helpers';

class Main extends React.Component {
  state = {
    isEnabled: false,
    users: {},
  };

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

    if (!validateIPaddress(ipadress)) {
      ipAdressError = 'Please, provide valid IpAdress';
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

    const validation = this.canBeSubmitted();

    if (validation) {
      this.setState({
        isEnabled: true,
      });
    }
  };

  onSubmit = event => {
    event.preventDefault();
    const { nickname, email, ipadress } = this.state;
    const validation = this.validateForm();

    if (validation) {
      this.setState({
        users: { nickname, email, ipadress },
      });
    }
  };

  canBeSubmitted() {
    const { nickname, email, ipadress } = this.state;

    if (validateEmail(email) && validateIPaddress(ipadress) && nickname) {
      return true;
    }
    return false;
  }

  render() {
    const { nickNameError, emailError, ipAdressError, isEnabled } = this.state;

    return (
      <>
        <Data
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          nickNameError={nickNameError}
          emailError={emailError}
          ipAdressError={ipAdressError}
          isEnabled={isEnabled}
        />
        <Users />
      </>
    );
  }
}

export default Main;
