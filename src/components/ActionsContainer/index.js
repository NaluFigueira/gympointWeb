import React from 'react';

import { MdSearch } from 'react-icons/md';

import PropTypes from 'prop-types';

import Button from '~/components/Button';

import { ActionsContainer, SearchBar } from './styles';

export default function ActionBar({ name, onClick, onChange }) {
  return (
    <ActionsContainer>
      <h2>Gerenciando {name}s</h2>

      <SearchBar>
        <Button title="Cadastrar" type="submit" onClick={onClick} />

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
          <input
            type="text"
            placeholder={`Buscar ${name}`}
            onChange={event => onChange(event.target.value)}
          />
        </div>
      </SearchBar>
    </ActionsContainer>
  );
}

ActionBar.defaultProps = {
  onClick: () => {},
  onChange: () => {},
};

ActionBar.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  onChange: PropTypes.func,
};
