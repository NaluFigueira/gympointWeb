import styled from 'styled-components';

import { darken } from 'polished';

import Colors from '~/styles/colors';

export const Wrapper = styled.div`
  height: 100%;
  background: ${Colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 360px;
  text-align: center;
  padding: 30px;
  background-color: white;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-top: 30px;

    label {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      font-weight: bold;
      text-transform: uppercase;
      color: #444;

      input {
        border: 1px solid #ddd;
        border-radius: 4px;
        height: 45px;
        padding: 0 15px;
        color: ${Colors.secondary};
        width: 100%;
        margin: 10px 0 20px 0;

        &::placeholder {
          color: #444444;
        }
      }
    }

    span {
      color: #f64c75;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 5px 0 0;
      height: 44px;
      background: #f64c75;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#f64c75')};
      }
    }

    a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
