import styled from 'styled-components';

export const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Error = styled.div`
  position: relative;
  display: flex;
  font-size: 0.8rem;
  align-items: center;
  margin-left: 25px;
  padding: 0 5px;
  color: ${({ theme }) => theme.colors.intensivepink};
  background-color: ${({ theme }) => theme.colors.lightpink};

  &::before {
    position: absolute;
    left: -6px;
    content: '';
    border-style: solid;
    border-width: 5px 6px 5px 0;
    border-color: transparent ${({ theme }) => theme.colors.lightpink}
      transparent transparent;
  }
`;
