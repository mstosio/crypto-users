import React from 'react';
import PropTypes from 'prop-types';

const Data = ({
  onSubmit,
  onChange,
  nickNameError,
  emailError,
  ipAdressError,
}) => (
  <form onSubmit={onSubmit} noValidate>
    <label htmlFor="nickname">Nickname</label>
    <input type="text" id="nickname" name="nickname" onChange={onChange} />
    {nickNameError}

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={onChange} />
    {emailError}

    <label htmlFor="ipadress">IP adress</label>
    <input type="text" id="ipadress" name="ipadress" onChange={onChange} />
    {ipAdressError}

    <button type="submit">Add User</button>
  </form>
);

export default Data;

Data.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  nickNameError: PropTypes.string,
  emailError: PropTypes.string,
  ipAdressError: PropTypes.string,
};
