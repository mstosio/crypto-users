import styled from 'styled-components';

export const UsersWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightborder};
  padding: 25px;
  margin-top: 35px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Table = styled.table`
  width: 100%;
`;

export const TableThead = styled.thead`
  display: grid;
  grid-template-columns: 1fr;
  background: ${({ theme }) => theme.colors.lightnavy};
  font-size: 1rem;
  padding: 10px 10px;
  color: ${({ theme }) => theme.colors.deepnavy};
`;

export const TableTbody = styled.tbody`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  padding: 10px 10px;
`;

export const TableRow = styled.tr`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  padding: 5px 0;
  ${({ heading, theme }) =>
    !heading &&
    `
    border-bottom: 2px solid ${theme.colors.light};
  `}
`;

export const TH = styled.th`
  display: flex;
  justify-content: flex-start;
`;

export const TD = styled.td`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${({ theme }) => theme.colors.deepnavy};
`;
