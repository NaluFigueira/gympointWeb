import styled from 'styled-components';

import Colors from '~/styles/colors';

export const TableContainer = styled.div`
  padding: 20px;
  background: white;
  width: 100%;
  max-height: 70vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
    border-radius: 4px;
    background-color: ${Colors.secondary};
  }

  &::-webkit-scrollbar-thumb {
    background: ${Colors.primary};
  }

  table {
    width: 100%;
    text-align: left;
    border-collapse: collapse;

    tr {
      &:last-child {
        border: none;
      }
      border-bottom: 1px solid #eee;
    }

    td {
      &:first-child {
        min-width: 15vw;
      }
      &:nth-last-child(2) {
        color: #4d85ee;
      }
      &:nth-last-child(2) a:visited {
        color: #4d85ee;
      }
      &:nth-last-child(1) {
        cursor: pointer;
        color: #de3b3b;
      }
    }

    th {
      font-weight: bold;
      text-transform: uppercase;
    }
  }
`;

export const TableData = styled.td`
  color: #666;
  padding: 15px 0;
  text-align: ${props => (props.textAlignCenter ? 'center' : '')};
  display: ${props => (props.contentIsBooleanType ? 'flex' : '')};
  justify-content: ${props => (props.contentIsBooleanType ? 'center' : '')};
`;

export const Active = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  align-self: center;
  background-color: ${props => (props.active ? 'green' : Colors.secondary)};
`;
