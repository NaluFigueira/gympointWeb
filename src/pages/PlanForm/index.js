/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import Button from '~/components/Button';

import history from '~/services/history';

import { createPlan, editPlan } from '~/store/modules/plans/actions';

import { Container, ActionsContainer, SearchBar } from './styles';

export default function PlanForm() {
  const [data, setData] = useState({});
  const [price, setPrice] = useState(0.0);
  const dispatch = useDispatch();
  const location = useLocation();
  const { edit, object } = location.state || { edit: false, object: {} };

  const schema = Yup.object().shape({
    title: Yup.string().required('Título é obrigatório!'),
    duration: Yup.number().required('Duração do plano é obrigatória!'),
    monthlyPrice: Yup.number().required('Preço mensal é obrigatório!'),
    price: Yup.number().required('Preço anual é obrigatório!'),
  });

  useEffect(() => {
    if (edit) {
      const monthlyPrice = object.price / object.duration;
      setData({
        monthlyPrice: Math.round(monthlyPrice * 100) / 100,
        ...object,
      });
      setPrice(object.price);
    }
  }, []);

  function calculatefinalPrice() {
    const duration = document.getElementById('duration');
    const monthlyPrice = document.getElementById('monthlyPrice');

    setPrice(parseInt(duration.value, 8) * parseFloat(monthlyPrice.value));
  }

  function handleSubmit(formData) {
    if (!edit) dispatch(createPlan(formData));
    else dispatch(editPlan({ id: data.id, ...formData }));
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
            <Input
              name="duration"
              type="number"
              id="duration"
              onChange={calculatefinalPrice}
            />
          </label>
          <label htmlFor="monthlyPrice">
            Preço mensal
            <Input
              name="monthlyPrice"
              type="number"
              step=".01"
              onChange={calculatefinalPrice}
              id="monthlyPrice"
            />
          </label>
          <label htmlFor="price">
            Preço total
            <Input name="price" disabled value={price} id="price" />
          </label>
        </div>
      </Form>
    </Container>
  );
}
