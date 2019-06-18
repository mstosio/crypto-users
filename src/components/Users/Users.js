import React from 'react';
import PropTypes from 'prop-types';
import User from './User/User';

const Users = ({ users }) =>
  users.map(user => (
    <User
      nickname={user.nickname}
      email={user.email}
      ipadress={user.ipadress}
    />
  ));

export default Users;

Users.propTypes = {
  users: PropTypes.array,
};
