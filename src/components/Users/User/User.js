import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TD } from '../../../layout/index';

const User = ({ nickname, email, ipadress, removeItem }) => (
  <TableRow>
    <TD>{nickname}</TD>
    <TD>{email}</TD>
    <TD>
      {ipadress}
      <button onClick={() => removeItem(nickname)} type="submit">
        Delete
      </button>
    </TD>
  </TableRow>
);

export default User;

User.propTypes = {
  nickname: PropTypes.string,
  email: PropTypes.string,
  ipadress: PropTypes.string,
  removeItem: PropTypes.func,
};
