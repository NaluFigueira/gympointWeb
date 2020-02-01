/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';

import { Form, Input, Select } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import { addDays, subDays, format, addMonths, parseISO } from 'date-fns';
import Button from '~/components/Button';

import history from '~/services/history';
import { Container, ActionsContainer, SearchBar } from './styles';

export default function EnrollmentForm({ edit }) {
  const schema = Yup.object().shape({
    student: Yup.string().required('É obrigátorio a seleção de um aluno!'),
    plan: Yup.number().required('É obrigátorio a seleção de um plano!'),
    beginningDate: Yup.date('Data inválida!')
      .min(
        subDays(new Date(), 1),
        'A data de inicio deve ser a partir de hoje!'
      )
      .required('Data de início é obrigatório!'),
    endDate: Yup.date('Data inválida!')
      .when('beginningDate', (beginningDate, field) =>
        beginningDate
          ? field.min(
              addDays(beginningDate, 1),
              'A data de término deve ser superior a data de início!'
            )
          : field
      )
      .required('Data de término é obrigatório!'),
    finalPrice: Yup.number().required('Valor final é obrigatório!'),
  });

  const [data, setData] = useState({});
  const [students, setStudents] = useState([]);
  const [plans, setPlans] = useState([]);
  const [endDate, setEndDate] = useState('');
  const [price, setPrice] = useState(0);

  useEffect(() => {
    setStudents(['Ana', 'Breno', 'Iolanda', 'Mario', 'Gabriela']);
    setPlans([
      { id: 0, title: 'Basic', duration: 3, finalPrice: 120 },
      { id: 1, title: 'Gold', duration: 6, finalPrice: 240 },
      { id: 2, title: 'Diamond', duration: 12, finalPrice: 360 },
    ]);
  }, []);

  useEffect(() => {
    let beginningDate = new Date();
    beginningDate = format(beginningDate, 'yyyy-MM-dd');
    if (edit)
      setData({
        student: 'Ana',
        plan: 0,
        beginningDate,
        endDate,
        finalPrice: 255,
      });
    else
      setData({
        student: '',
        plan: 0,
        beginningDate,
        endDate,
        finalPrice: 0,
      });
  }, [edit, endDate]);

  function calculatePriceAndEndDate() {
    const plan = document.getElementById('plan');
    const beginningDate = document.getElementById('beginningDate');
    const selectedPlan = plans.find(p => p.id === parseInt(plan.value, 8));
    if (selectedPlan) {
      const date = addMonths(
        parseISO(beginningDate.value),
        selectedPlan.duration
      );
      setPrice(selectedPlan.finalPrice);
      setEndDate(date);
    }
  }

  function handleSubmit(formData) {
    // eslint-disable-next-line no-console
    console.log(formData);
  }

  return (
    <Container>
      <Form schema={schema} onSubmit={handleSubmit} initialData={data}>
        <ActionsContainer>
          {edit ? <h2>Edição de matrícula</h2> : <h2>Cadastro de matrícula</h2>}
          <SearchBar>
            <Button
              title="Voltar"
              type="Navigation"
              onClick={() => history.push('/enrollments')}
            />
            <Button title="Salvar" type="submit" />
          </SearchBar>
        </ActionsContainer>
        <label htmlFor="student">
          Aluno
          <Input
            name="student"
            type="text"
            list="students"
            autoComplete="off"
          />
          <datalist id="students">
            {students.map((student, index) => (
              <option key={student + index}>{student}</option>
            ))}
          </datalist>
        </label>
        <div>
          <label htmlFor="plan">
            Plano
            <Select
              name="plan"
              options={plans}
              id="plan"
              onChange={calculatePriceAndEndDate}
            />
          </label>
          <label htmlFor="beginningDate">
            Data de início
            <Input
              name="beginningDate"
              type="date"
              id="beginningDate"
              onChange={calculatePriceAndEndDate}
            />
          </label>
          <label htmlFor="endDate">
            Data de término
            <Input
              name="endDate"
              type="date"
              id="endDate"
              disabled
              value={endDate}
            />
          </label>
          <label htmlFor="finalPrice">
            Valor Final
            <Input
              name="finalPrice"
              type="number"
              step=".01"
              id="finalPrice"
              disabled
              value={price}
            />
          </label>
        </div>
      </Form>
    </Container>
  );
}

EnrollmentForm.defaultProps = {
  edit: false,
};

EnrollmentForm.propTypes = {
  edit: PropTypes.bool,
};
