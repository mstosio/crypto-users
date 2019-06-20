import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import User from './User/User';
import {
  UsersWrapper,
  Table,
  TableThead,
  TableTbody,
  TableRow,
  TH,
  Button,
} from '../../layout/index';

const Users = ({ users, removeItem, deleteUsers }) => {
  let button;

  if (users.length !== 0) {
    button = (
      <Button
        type="button"
        onClick={() =>
          window.confirm('Are you sure u want to delete?') && deleteUsers()
        }
      >
        Delete Users
      </Button>
    );
  }

  return (
    <>
      <UsersWrapper>
        <Table>
          <TableThead>
            <TableRow heading>
              <TH>Nickname</TH>
              <TH>E-mail</TH>
              <TH>Ip Adress</TH>
            </TableRow>
          </TableThead>
          <TableTbody>
            {users.map(user => (
              <User
                key={shortid.generate()}
                nickname={user.nickname}
                email={user.email}
                ipadress={user.ipadress}
                removeItem={removeItem}
              />
            ))}
          </TableTbody>
        </Table>
        {button}
      </UsersWrapper>
    </>
  );
};
export default Users;

Users.propTypes = {
  users: PropTypes.array,
  removeItem: PropTypes.func,
  deleteUsers: PropTypes.func,
};
