import styled from 'styled-components';

export const CryptoApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 50px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.lightshadow};
  width: 800px;
`;
