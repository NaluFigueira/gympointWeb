import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 200px;

  form {
    width: 100%;

    div {
      display: flex;
      justify-content: space-between;

      label {
        width: 25%;
      }
    }

    span {
      color: red;
      margin-bottom: 20px;
    }
  }
`;

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
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
