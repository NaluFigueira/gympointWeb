/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { Form, Input, Select } from '@rocketseat/unform';
import * as Yup from 'yup';
import ActionsContainer from '~/components/ActionsContainer';

export default function EnrollRegister() {
  const schema = Yup.object().shape({
    studentNames: Yup.string().required('É obrigátorio a seleção de um aluno!'),
    planName: Yup.string().required('É obrigátorio a seleção de um plano!'),
    beginningDate: Yup.date()
      .min(new Date(), 'A data de inicio deve ser a partir de hoje!')
      .required('Data de início é obrigatório!'),
    endDate: Yup.date()
      .min(new Date(), 'A data de término deve ser a partir de hoje!')
      .required('Data de término é obrigatório!'),
    finalPrice: Yup.number().required('Valor final é obrigatório!'),
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
      <ActionsContainer name="matrícula" actionType="register" />
      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="studentNames">
          Aluno
          <Input name="studentNames" type="text" id="studentNames" />
          <datalist id="studentNames">
            <option value="1">Aluno 1</option>
            <option value="2">Aluno 2</option>
            <option value="3">Aluno 3</option>
            <option value="4">Aluno 4</option>
            <option value="5">Aluno 5</option>
          </datalist>
        </label>
        <label htmlFor="planName">
          Plano
          <Select name="planName">
            <option value="1" selected>
              Plano 1
            </option>
            <option value="2">Plano 2</option>
            <option value="3">Plano 3</option>
          </Select>
        </label>
        <label htmlFor="beginningDate">
          Data de início
          <Input name="beginningDate" type="date" id="beginningDate" />
        </label>
        <label htmlFor="endDate">
          Data de término
          <Input name="endDate" type="date" id="endDate" />
        </label>
        <label htmlFor="finalPrice">
          Valor Final
          <Input name="finalPrice" type="number" step=".01" id="finalPrice" />
        </label>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
      </Form>
    </>
  );
}
