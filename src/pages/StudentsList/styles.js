import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const SearchBar = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;

    input {
      padding: 10px 10px 10px 40px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
  }
`;

export const TableContainer = styled.div`
  padding: 20px;
  background: white;
  width: 100%;
  max-height: 70vh;
  overflow-y: scroll;

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;

    tr {
      &:first-child,
      &:last-child {
        border: none;
      }
      border-bottom: 1px solid #eee;
    }

    th {
      &:first-child {
        min-width: 15vw;
      }

      &:nth-last-child(-n + 3) {
        text-align: center;
      }

      font-weight: bold;
      text-transform: uppercase;
    }

    td {
      &:first-child {
        min-width: 15vw;
      }
      &:nth-last-child(-n + 3) {
        text-align: center;
      }
      &:nth-last-child(2) {
        color: #4d85ee;
      }
      &:nth-last-child(1) {
        color: #de3b3b;
      }

      color: #666;
      padding: 15px 0;
    }
  }
`;
