/* eslint-disable react/no-unused-state */
/* eslint-disable no-cond-assign */
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../layout/utils/theme';
import Data from './Data/Data';
import Users from './Users/Users';
import { validateEmail, validateIPaddress } from '../libs/Helpers';
import { CryptoApp, H1 } from '../layout/index';

class Main extends React.Component {
  state = {
    isEnabled: false,
    nickname: '',
    email: '',
    ipadress: '',
    nickNameError: '',
    emailError: '',
    ipAdressError: '',
    users: [],
    sortBy: 'nickname',
    sortType: 'asc',
  };

  validateForm = () => {
    let { nickNameError, emailError, ipAdressError } = '';
    const { nickname, email, ipadress } = this.state;

    if (nickname === '' || nickname.length > 24) {
      nickNameError = 'Please, provide nickname';
    }

    if (nickname.length > 24) {
      nickNameError = 'Your nickname cannot be longer then 24 characters';
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

  onChange = async event => {
    await this.setState({
      [event.target.name]: event.target.value,
    });
    this.canBeSubmitted();
  };

  checkIfExsists = users => {
    const { nickname, email } = this.state;
    let bool = true;
    // eslint-disable-next-line array-callback-return
    users.map(user => {
      if (nickname === user.nickname) {
        bool = false;
        alert('User with this nickname already exsists.');
      }
      if (email === user.email) {
        bool = false;
        alert('User with this email already exsists.');
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

    this.setState({
      users: usersList,
      nickname: '',
      email: '',
      ipadress: '',
      nickNameError: '',
      emailError: '',
      ipAdressError: '',
      sortBy: '',
      sortType: '',
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

  changeSort = event => {
    const sortInfo = event.target.value.split('-');

    this.setState({
      sortBy: sortInfo[0],
      sortType: sortInfo[1],
    });
  };

  sortList = value => {
    const { users, sortType } = this.state;
    const newList = [...users];

    const sortSelectedAsc = propName => (a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a[propName] === b[propName] ? 0 : a[propName] < b[propName] ? -1 : 1;

    const sortSelectedDsc = propName => (a, b) =>
      // eslint-disable-next-line no-nested-ternary
      a[propName] === b[propName] ? 0 : a[propName] > b[propName] ? -1 : 1;

    if (sortType === 'asc') {
      newList.sort(sortSelectedAsc(value));
    } else {
      newList.sort(sortSelectedDsc(value));
    }

    this.setState({
      users: newList,
    });
  };

  canBeSubmitted() {
    const { nickname, email, ipadress } = this.state;

    if (validateEmail(email) && validateIPaddress(ipadress) && nickname) {
      this.setState({
        isEnabled: true,
        ipAdressError: '',
      });
    } else {
      this.validateForm();
      this.setState({
        isEnabled: false,
      });
    }
  }

  render() {
    const {
      nickname,
      email,
      ipadress,
      nickNameError,
      emailError,
      ipAdressError,
      isEnabled,
      users,
      sortBy,
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <CryptoApp>
          <H1>Crypto users</H1>
          <Data
            nickname={nickname}
            email={email}
            ipadress={ipadress}
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
            sortList={this.sortList}
            sortBy={sortBy}
            changeSort={this.changeSort}
          />
        </CryptoApp>
      </ThemeProvider>
    );
  }
}

export default Main;
