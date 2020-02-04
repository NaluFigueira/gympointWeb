import React from 'react';

import PropTypes from 'prop-types';

import { Wrapper } from './styles';
import Header from '~/components/Header';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <Wrapper>{children}</Wrapper>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
