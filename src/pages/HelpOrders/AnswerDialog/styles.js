import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 20px;
  position: fixed;
  z-index: 1;
  width: 30vw;
  top: 30%;

  form {
    width: 100%;

    div {
      width: 100%;
      textarea {
        width: 100%;
        resize: none;
        min-height: 120px;
      }
    }

    button {
      width: -webkit-fill-available;
      margin-left: 20px;
      margin-right: 20px;
      justify-content: center;
    }
  }
`;
