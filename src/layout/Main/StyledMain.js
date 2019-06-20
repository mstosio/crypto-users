import styled from 'styled-components';

export const CryptoApp = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  padding: 50px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.lightshadow};
  width: 1000px;
`;
