import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../layout/index';

const UserSort = ({ changeSort, sortBy, sortList }) => (
  <div>
    <Button onClick={() => sortList(sortBy)}>Sort</Button>
    <select onChange={changeSort}>
      <option value="nickname-asc" data-sorttype="asc">
        Nickname - A-Z
      </option>
      <option value="nickname-dsc" data-sorttype="dsc">
        Nickname - Z-A
      </option>
      <option value="email-asc" data-sorttype="asc">
        Email - A-Z
      </option>
      <option value="email-dsc" data-sorttype="dsc">
        Email - Z-A
      </option>
    </select>
  </div>
);

export default UserSort;

UserSort.propTypes = {
  sortList: PropTypes.func,
  changeSort: PropTypes.func,
  sortBy: PropTypes.string,
};
