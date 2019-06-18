import React from 'react';
import PropTypes from 'prop-types';

const User = ({ nickname, email, ipadress }) => (
  <>
    <div>{nickname}</div>
    <div>{email}</div>
    <div>{ipadress}</div>
    <button type="submit">Delete</button>
  </>
);

export default User;

User.propTypes = {
  nickname: PropTypes.string,
  email: PropTypes.string,
  ipadress: PropTypes.string,
};
