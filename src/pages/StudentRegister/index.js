/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from '~/components/Button';

import history from '~/services/history';

import { Container, ActionsContainer, SearchBar } from './styles';

export default function StudentRegister() {
  const [data, setData] = useState({});

  const schema = Yup.object().shape({
    name: Yup.string().required('Nome completo é obrigatório!'),
    email: Yup.string()
      .email('Insira um e-mail válido!')
      .required('E-mail é obrigatório!'),
    age: Yup.number().required('Idade é obrigatória!'),
    weight: Yup.number().required('Peso é obrigatório!'),
    height: Yup.number().required('Altura é obrigatório!'),
  });

  useEffect(() => {
    setData({
      name: 'Ana',
      email: 'email@email.com',
      age: '21',
      weight: '59.5',
      height: '1.55',
    });
  }, []);

  function handleSubmit({ formData }) {
    // eslint-disable-next-line no-console
    console.log({ formData });
  }

  return (
    <Container>
      <ActionsContainer>
        <h2>Cadastro de aluno</h2>
        <SearchBar>
          <Button
            title="Voltar"
            type="Navigation"
            onClick={() => history.push('/students')}
          />
          <Button title="Salvar" type="Action" />
        </SearchBar>
      </ActionsContainer>
      <Form schema={schema} onSubmit={handleSubmit} initialData={data}>
        <label htmlFor="name">
          Nome Completo
          <Input name="name" type="text" id="name" placeholder="John Doe" />
        </label>
        <label htmlFor="email">
          Endereço de e-mail
          <Input
            name="email"
            type="email"
            id="email"
            placeholder="exemplo@email.com"
          />
        </label>
        <div>
          <label htmlFor="age">
            Idade
            <Input name="age" type="number" id="age" />
          </label>
          <label htmlFor="weight">
            Peso (em kg)
            <Input name="weight" type="number" step=".01" id="weight" />
          </label>
          <label htmlFor="height">
            Altura
            <Input name="height" type="number" step=".01" id="height" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
