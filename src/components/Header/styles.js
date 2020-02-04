import styled from 'styled-components';

import Colors from '~/styles/colors';

export const Container = styled.div`
  height: 64px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  img {
    margin: 0 20px;
  }

  ul {
    display: flex;
  }
`;

export const MenuItem = styled.li`
  color: ${props => (props.selected ? '#444' : Colors.secondary)};
  padding: 10px;
  font-weight: bold;
  text-transform: uppercase;

  &:hover {
    cursor: pointer;
  }
`;

export const Divider = styled.div`
  height: 50%;
  margin: 0 20px;
  border-left: 1px solid #ddd;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  margin-right: 20px;

  strong {
    color: #666;
  }

  span {
    color: #de3b3b;
    &:hover {
      cursor: pointer;
    }
  }
`;
