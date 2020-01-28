import styled from 'styled-components';

import Colors from '~/styles/colors';

export const StyledButton = styled.button`
  background-color: ${props =>
    props.type === 'Action' ? Colors.primary : '#CCCCCC'};
  color: white;
  border: none;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  align-items: center;
  padding: 12px;
  margin: 10px;
  border-radius: 4px;
`;
