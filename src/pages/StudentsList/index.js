import React from 'react';

import { MdSearch, MdEdit, MdDelete } from 'react-icons/md';

import Button from '~/components/Button';

import {
  Container,
  ActionsContainer,
  SearchBar,
  TableContainer,
} from './styles';

export default function StudentsList() {
  return (
    <Container>
      <ActionsContainer>
        <h2>Gerenciando alunos</h2>

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
            <input type="text" placeholder="Buscar aluno" />
          </div>
        </SearchBar>
      </ActionsContainer>
      <TableContainer>
        <table>
          <tr>
            <th>Nome</th>
            <th>E-mail</th>
            <th>Idade</th>
            <th>
              <MdEdit />
            </th>
            <th>
              <MdDelete />
            </th>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
          <tr>
            <td>Cha Ji-Hun</td>
            <td>example@rocketseat.com.br</td>
            <td>20</td>
            <td>editar</td>
            <td>apagar</td>
          </tr>
        </table>
      </TableContainer>
    </Container>
  );
}
