import React from 'react';

import { MdSearch } from 'react-icons/md';

import PropTypes from 'prop-types';

import Button from '~/components/Button';

import { ActionsContainer, SearchBar } from './styles';

export default function ActionBar({ type }) {
  return (
    <ActionsContainer>
      <h2>Gerenciando {type}s</h2>

      <SearchBar>
        <Button title="Cadastrar" type="Action" />

        <div>
          <MdSearch
            style={{
              color: '#444444',
              position: 'absolute',
              marginLeft: 10,
              height: 18,
              width: 18,
            }}
          />
          <input type="text" placeholder={`Buscar ${type}`} />
        </div>
      </SearchBar>
    </ActionsContainer>
  );
}

ActionBar.propTypes = {
  type: PropTypes.string.isRequired,
};
