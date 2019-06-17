import React from 'react';
import PropTypes from 'prop-types';

const Data = ({ onSubmit, onChange }) => (
  <>
    <form action="" onSubmit={onSubmit}>
      <label htmlFor="nickname">Nickname</label>
      <input type="text" id="nickname" required />

      <label htmlFor="email">Email</label>
      <input type="text" id="nickname" required />

      <label htmlFor="nickname">IP adress</label>
      <input type="text" id="nickname" required />

      <button type="submit" onChange={onChange}>
        Add User
      </button>
    </form>
  </>
);

export default Data;

Data.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
};
