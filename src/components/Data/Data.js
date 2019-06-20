import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Input, Label, Error } from '../../layout/index';

const Data = ({
  onSubmit,
  onChange,
  nickNameError,
  emailError,
  ipAdressError,
  isEnabled,
}) => (
  <Form onSubmit={onSubmit} autoComplete="off" noValidate>
    <Label htmlFor="nickname">Nickname</Label>
    <Input type="text" id="nickname" name="nickname" onChange={onChange} />
    <Error>{nickNameError}</Error>

    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" name="email" onChange={onChange} />
    <Error>{emailError}</Error>

    <Label htmlFor="ipadress">IP adress</Label>
    <Input type="text" id="ipadress" name="ipadress" onChange={onChange} />
    <Error>{ipAdressError}</Error>

    <Button type="submit" disabled={!isEnabled}>
      Add User
    </Button>
  </Form>
);

export default Data;

Data.propTypes = {
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
  nickNameError: PropTypes.string,
  emailError: PropTypes.string,
  ipAdressError: PropTypes.string,
  isEnabled: PropTypes.bool,
};
