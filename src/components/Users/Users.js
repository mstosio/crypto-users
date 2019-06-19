import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import User from './User/User';

const Users = ({ users, removeItem, deleteUsers }) => (
  <div>
    <button type="button" onClick={deleteUsers}>
      Delete Users
    </button>
    {users.map(user => (
      <User
        key={shortid.generate()}
        nickname={user.nickname}
        email={user.email}
        ipadress={user.ipadress}
        removeItem={removeItem}
      />
    ))}
  </div>
);

export default Users;

Users.propTypes = {
  users: PropTypes.array,
  removeItem: PropTypes.func,
  deleteUsers: PropTypes.func,
};
