import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import User from './User/User';

const Users = ({ users, removeItem, deleteUsers }) => {
  let button;

  if (users.length !== 0) {
    button = (
      <button
        type="button"
        onClick={() =>
          window.confirm('Are you sure u want to delete?') && deleteUsers()
        }
      >
        Delete Users
      </button>
    );
  }

  return (
    <>
      {button}
      {users.map(user => (
        <User
          key={shortid.generate()}
          nickname={user.nickname}
          email={user.email}
          ipadress={user.ipadress}
          removeItem={removeItem}
        />
      ))}
    </>
  );
};
export default Users;

Users.propTypes = {
  users: PropTypes.array,
  removeItem: PropTypes.func,
  deleteUsers: PropTypes.func,
};
