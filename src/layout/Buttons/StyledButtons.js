import styled, { css } from 'styled-components';

export const Button = styled.button`
  margin-top: ${props => (props.Sort ? '0' : '35px')};
  margin-right: ${props => (props.Sort ? '10px' : '0')};
  ${({ disabled, theme }) =>
    !disabled &&
    `
    background:  ${theme.colors.maingreen};
  `}
  

  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  padding: 10px 15px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  height: 40px;
  width: 40px;
  border: none;
  background-color: ${({ theme }) => theme.colors.lightnavy};
  border-radius: 50%;
  cursor: pointer;
  position: relative;

  &:after {
    content: 'x';
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.deepnavy};
  }

  @media only screen and (max-width: 800px) {
    height: 35px;
    width: 35px;

    &:after {
      font-size: 1rem;
    }
  }
`;
