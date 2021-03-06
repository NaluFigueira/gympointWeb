import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd, MdArrowBack } from 'react-icons/md';

import { StyledButton } from './styles';

export default function Button({ title, type, onClick, noIcon }) {
  return (
    <StyledButton styleType={type} type={type} onClick={onClick}>
      {!noIcon &&
        (type === 'submit' ? (
          <MdAdd style={{ marginRight: 10, height: 18, width: 18 }} />
        ) : (
          <MdArrowBack style={{ marginRight: 10, height: 18, width: 18 }} />
        ))}
      {title}
    </StyledButton>
  );
}

Button.defaultProps = {
  onClick: () => {},
  noIcon: false,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  noIcon: PropTypes.bool,
};
