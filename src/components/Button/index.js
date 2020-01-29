import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd, MdArrowBack } from 'react-icons/md';

import { StyledButton } from './styles';

export default function Button({ title, type, onClick }) {
  return (
    <StyledButton
      styleType={type}
      type={type === 'Action' ? 'submit' : 'button'}
      onClick={onClick}
    >
      {type === 'Action' ? (
        <MdAdd style={{ marginRight: 10, height: 18, width: 18 }} />
      ) : (
        <MdArrowBack style={{ marginRight: 10, height: 18, width: 18 }} />
      )}
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  onClick: () => {},
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
