import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 25vw;
  margin-right: 25vw;
  height: calc(100vh - 64px);

  div {
    padding: 20px;
  }
`;

export const DialogContainer = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.25);
`;
