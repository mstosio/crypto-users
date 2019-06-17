import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ onSubmit, onChange }) => (
  <form action="" onSubmit={onSubmit}>
    <label htmlFor="nickname">Nickname</label>
    <input type="text" id="nickname" name="nickname" onChange={onChange} />

    <label htmlFor="email">Email</label>
    <input type="email" id="email" name="email" onChange={onChange} />

    <label htmlFor="ipadress">IP adress</label>
    <input type="text" id="ipadress" name="ipadress" onChange={onChange} />

    <button type="submit">Add User</button>
  </form>
);

export default Data;

Data.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
