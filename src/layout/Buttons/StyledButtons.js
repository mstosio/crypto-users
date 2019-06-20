import styled from 'styled-components';

export const Button = styled.button`
  margin-top: 35px;
  background-color: ${({ theme }) => theme.colors.maingreen};
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-radius: 20px;
  font-size: 1.2rem;
  padding: 10px 15px;
  cursor: pointer;
`;
