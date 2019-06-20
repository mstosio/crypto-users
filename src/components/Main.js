/* eslint-disable react/no-unused-state */
/* eslint-disable no-cond-assign */
import React from 'react';
import Data from './Data/Data';
import Users from './Users/Users';
import { validateEmail, validateIPaddress } from '../libs/Helpers';
import { CryptoApp, H1 } from '../layout/index';

class Main extends React.Component {
  state = {
    isEnabled: false,
    users: [],
  };

  validateForm = () => {
    let { nickNameError, emailError, ipAdressError } = '';
    const { nickname, email, ipadress } = this.state;

    if (nickname === '') {
      nickNameError = 'Please, provide nickname';
    }

    if (ipadress === '') {
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

  // clean up
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

  checkIfExsists = users => {
    const { nickname, email } = this.state;
    let bool = true;
    // eslint-disable-next-line array-callback-return
    users.map(user => {
      if (nickname === user.nickname) {
        bool = false;
        alert('DUDE, USER WITH THIS NICKNAME EXSISTS');
      }
      if (email === user.email) {
        bool = false;
        alert('DUDE, EMAIL IS ALREADY TAKEN');
      }
    });

    return bool;
  };

  removeItem = nickname => {
    const { users } = this.state;
    const userList = [...users];
    this.setState({
      users: userList.filter(user => user.nickname !== nickname),
    });
  };

  addUser = user => {
    const { users } = this.state;
    const usersList = [...users];
    usersList.push(user);

    // change to Initial State?
    this.setState({
      users: usersList,
      nickname: '',
      email: '',
      ipadress: '',
      nickNameError: '',
      emailError: '',
      ipAdressError: '',
      isEnabled: false,
    });
  };

  deleteUsers = () => {
    this.setState({
      users: [],
    });
  };

  onSubmit = event => {
    event.preventDefault();
    const { nickname, email, ipadress, users } = this.state;
    const validation = this.validateForm();
    const checkIfExsists = this.checkIfExsists(users);

    if (checkIfExsists && validation) {
      this.addUser({ nickname, email, ipadress });
      event.target.reset();
    }
  };

  // shorten
  canBeSubmitted() {
    const { nickname, email, ipadress } = this.state;
    if (validateEmail(email) && validateIPaddress(ipadress) && nickname) {
      return true;
    }
    return false;
  }

  render() {
    const {
      nickNameError,
      emailError,
      ipAdressError,
      isEnabled,
      users,
    } = this.state;

    return (
      <>
        <CryptoApp>
          <H1>Crypto users</H1>
          <Data
            onChange={this.onChange}
            onSubmit={this.onSubmit}
            nickNameError={nickNameError}
            emailError={emailError}
            ipAdressError={ipAdressError}
            isEnabled={isEnabled}
          />

          <Users
            users={users}
            removeItem={this.removeItem}
            deleteUsers={this.deleteUsers}
          />
        </CryptoApp>
      </>
    );
  }
}

export default Main;
