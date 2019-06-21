import styled from 'styled-components';

export const CryptoApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  padding: 10px;
  background-color: #ffffff;
  box-shadow: ${({ theme }) => theme.shadows.lightshadow};

  @media (min-width: 1000px) {
    min-width: 800px;
    padding: 50px;
  }
`;
