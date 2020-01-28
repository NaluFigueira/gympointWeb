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

    th {
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
      &:nth-last-child(-n + 2):hover {
        cursor: pointer;
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

export const Active = styled.div`
  border-radius: 50%;
  height: 15px;
  width: 15px;
  align-self: center;
  background-color: ${props => (props.active ? 'green' : Colors.secondary)};
`;
