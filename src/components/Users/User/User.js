import React from 'react';
import PropTypes from 'prop-types';
import { TableRow, TD, DeleteButton } from '../../../layout/index';

const User = ({ nickname, email, ipadress, removeItem }) => (
  <TableRow>
    <TD>{nickname}</TD>
    <TD>{email}</TD>
    <TD>
      {ipadress}
      <DeleteButton onClick={() => removeItem(email)} type="button" />
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
