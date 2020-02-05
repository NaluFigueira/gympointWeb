/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import Button from '~/components/Button';

import history from '~/services/history';

import { createStudent, editStudent } from '~/store/modules/students/actions';

import { Container, ActionsContainer, SearchBar } from './styles';

export default function StudentForm() {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const location = useLocation();
  const { edit, object } = location.state || { edit: false, object: {} };

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
    if (edit) setData(object);
  }, []);

  function handleSubmit(formData) {
    if (!edit) dispatch(createStudent(formData));
    else dispatch(editStudent({ id: data.id, ...formData }));
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={data}>
        <ActionsContainer>
          {edit ? <h2>Edição de aluno</h2> : <h2>Cadastro de aluno</h2>}
          <SearchBar>
            <Button
              title="Voltar"
              type="Navigation"
              onClick={() => history.push('/students')}
            />
            <Button title="Salvar" type="submit" />
          </SearchBar>
        </ActionsContainer>
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
