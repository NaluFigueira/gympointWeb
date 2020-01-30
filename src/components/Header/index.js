import React, { useState, useEffect } from 'react';

import { Container, Menu, MenuItem, Divider, Profile } from './styles';

import sideLogo from '~/assets/sideLogo.png';

import history from '~/services/history';

export default function Header() {
  const [selected, setSelected] = useState('students');

  useEffect(() => {
    const pathname = history.location.pathname.split('/')[1];
    setSelected(pathname);
  }, []);

  const handleOnClick = selectedItem => {
    setSelected(selectedItem);
    history.push(`/${selectedItem}`);
  };

  return (
    <Container>
      <Menu>
        <img src={sideLogo} alt="Gympoint" />
        <Divider />
        <ul>
          <MenuItem
            selected={selected === 'students' || selected === 'student'}
            onClick={() => handleOnClick('students')}
          >
            Alunos
          </MenuItem>
          <MenuItem
            selected={selected === 'plans' || selected === 'plan'}
            onClick={() => handleOnClick('plans')}
          >
            Planos
          </MenuItem>
          <MenuItem
            selected={selected === 'enrollments' || selected === 'enrollment'}
            onClick={() => handleOnClick('enrollments')}
          >
            Matrículas
          </MenuItem>
          <MenuItem
            selected={selected === 'help_orders'}
            onClick={() => handleOnClick('help_orders')}
          >
            Pedidos de auxílio
          </MenuItem>
        </ul>
      </Menu>
      <Profile>
        <strong>Diego Fernandes</strong>
        <span>sair do sistema</span>
      </Profile>
    </Container>
  );
}
