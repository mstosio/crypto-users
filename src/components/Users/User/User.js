import React from 'react';
import PropTypes from 'prop-types';

const User = ({ nickname, email, ipadress, removeItem }) => (
  <div>
    <div>{nickname}</div>
    <div>{email}</div>
    <div>{ipadress}</div>
    <button onClick={() => removeItem(nickname)} type="submit">
      Delete
    </button>
  </div>
);

export default User;

User.propTypes = {
  nickname: PropTypes.string,
  email: PropTypes.string,
  ipadress: PropTypes.string,
  removeItem: PropTypes.func,
};
