import styled from 'styled-components';

export const Input = styled.input`
  padding: 15px 0 5px 0;
  border: 0;
  outline: 0;
  background: transparent;
  border-bottom: 1px solid black;
`;

export const Label = styled.label`
  margin-top: 25px;
  color: ${({ theme }) => theme.colors.lightgray};
  font-size: 0.9rem;
`;
