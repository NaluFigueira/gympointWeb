/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import ActionsContainer from '~/components/ActionsContainer';

export default function PlanRegister() {
  const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    duration: Yup.number().required('Duração do plano é obrigatória!'),
    monthlyPrice: Yup.number().required('Preço mensal é obrigatório!'),
    annualPrice: Yup.number().required('Preço anual é obrigatório!'),
  });

  const [loading, setLoading] = useState(false);

  function handleSubmit({ data }) {
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log({ data });
    setLoading(false);
  }

  return (
    <>
      <ActionsContainer name="plano" actionType="register" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="title">
          Título do Plano
          <Input name="title" type="text" id="title" />
        </label>
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
          <Input name="annualPrice" type="number" step=".01" id="annualPrice" />
        </label>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
