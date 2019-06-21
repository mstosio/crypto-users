import React from 'react';
import PropTypes from 'prop-types';
import { Button, UserSortWrapper, Select, P } from '../../layout/index';

const UserSort = ({ changeSort, sortBy, sortList }) => (
  <UserSortWrapper>
    <P>Sort by:</P>
    <Select onChange={changeSort}>
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
    </Select>
    <Button onClick={() => sortList(sortBy)} Sort>
      Sort
    </Button>
  </UserSortWrapper>
);

export default UserSort;

UserSort.propTypes = {
  sortList: PropTypes.func,
  changeSort: PropTypes.func,
  sortBy: PropTypes.string,
};
