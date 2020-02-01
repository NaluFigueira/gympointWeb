import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import Colors from '~/styles/colors';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus{
    outline: 0;
  }

  html,body, #root{
    height: 100%;
  }

  body{
    -webkit-font-smoothing: antialiased;
  }

  body,input,button{
    font: 14px 'Roboto', sans-serif;
  }

  label {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: bold;
    text-transform: uppercase;
    color: #444;
  }

  input, textarea{
    border: 1px solid #ddd;
    border-radius: 4px;
    height: 45px;
    padding: 0 15px;
    color: #444;
    width: 100%;
    margin: 10px 0 10px 0;
  }

  input::placeholder {
    color: ${Colors.secondary};
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button{
    cursor: pointer;
  }
`;
