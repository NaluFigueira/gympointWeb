/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Button from '~/components/Button';

import history from '~/services/history';

import { Container, ActionsContainer, SearchBar } from './styles';

export default function PlanForm({ edit }) {
  const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    duration: Yup.number().required('Duração do plano é obrigatória!'),
    monthlyPrice: Yup.number().required('Preço mensal é obrigatório!'),
    annualPrice: Yup.number().required('Preço anual é obrigatório!'),
  });
  const [data, setData] = useState({});

  useEffect(() => {
    if (edit)
      setData({
        title: 'Super',
        duration: 24,
        monthlyPrice: 130,
        annualPrice: 1120,
      });
    else
      setData({
        title: '',
        duration: 0,
        monthlyPrice: 0,
        annualPrice: 0,
      });
  }, [edit]);

  function handleSubmit(formData) {
    // eslint-disable-next-line no-console
    console.log(formData);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={data}>
        <ActionsContainer>
          {edit ? <h2>Edição de plano</h2> : <h2>Cadastro de plano</h2>}
          <SearchBar>
            <Button
              title="Voltar"
              type="Navigation"
              onClick={() => history.push('/plans')}
            />
            <Button title="Salvar" type="submit" />
          </SearchBar>
        </ActionsContainer>
        <label htmlFor="title">
          Título do Plano
          <Input name="title" type="text" id="title" />
        </label>
        <div>
          <label htmlFor="duration">
            Duração (em meses)
            <Input name="duration" type="number" id="duration" />
          </label>
          <label htmlFor="monthlyPrice">
            Preço mensal
            <Input
              name="monthlyPrice"
              type="number"
              step=".01"
              id="monthlyPrice"
            />
          </label>
          <label htmlFor="annualPrice">
            Preço anual
            <Input
              name="annualPrice"
              type="number"
              step=".01"
              id="annualPrice"
            />
          </label>
        </div>
      </Form>
    </Container>
  );
}

PlanForm.defaultProps = {
  edit: false,
};

PlanForm.propTypes = {
  edit: PropTypes.bool,
};
