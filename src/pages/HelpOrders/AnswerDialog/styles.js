import styled from 'styled-components';

export const Container = styled.div`
  background: white;
  padding: 20px;
  position: fixed;
  z-index: 1;
  width: 30vw;
  top: 20vh;
  left: 35vw;

  form {
    width: 100%;

    div {
      margin-bottom: 20px;
      width: 100%;
      h4 {
        margin-bottom: 5px;
      }
      p {
        color: #666;
      }
      textarea {
        width: 100%;
        resize: none;
        min-height: 120px;
        padding: 10px;
      }
    }

    button {
      width: -webkit-fill-available;
      margin: 0;
      justify-content: center;
    }

    span {
      color: #de3b3b;
    }
  }
`;
