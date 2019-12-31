import React from 'react';

import { Container, Menu, MenuItem, Divider, Profile } from './styles';

import sideLogo from '~/assets/sideLogo.png';

export default function Header() {
  return (
    <Container>
      <Menu>
        <img src={sideLogo} alt="Gympoint" />
        <Divider />
        <ul>
          <MenuItem selected>Alunos</MenuItem>
          <MenuItem>Planos</MenuItem>
          <MenuItem>Matrículas</MenuItem>
          <MenuItem>Pedidos de auxílio</MenuItem>
        </ul>
      </Menu>
      <Profile>
        <strong>Diego Fernandes</strong>
        <span>sair do sistema</span>
      </Profile>
    </Container>
  );
}
