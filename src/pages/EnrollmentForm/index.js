/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { subDays, format, addMonths, parseISO } from 'date-fns';
import AsyncSelect from 'react-select/async';
import Select from 'react-select';
import Button from '~/components/Button';

import history from '~/services/history';
import {
  createEnrollment,
  editEnrollment,
} from '~/store/modules/enrollments/actions';

import api from '~/services/api';

import { getPlansRequest } from '~/store/modules/plans/actions';
import { getStudentsRequest } from '~/store/modules/students/actions';

import { Container, ActionsContainer, SearchBar } from './styles';

export default function EnrollmentForm() {
  const [data, setData] = useState({});
  const plansOptions = useSelector(state => state.plans.plans).map(plan => {
    return {
      value: plan.id,
      label: plan.title,
    };
  });
  const plans = useSelector(state => state.plans.plans);
  const students = useSelector(state => state.students.students).map(
    student => {
      return {
        value: student.id,
        label: student.name,
      };
    }
  );
  const [end_date, setEndDate] = useState('');
  const [price, setPrice] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedPlan, setSelectedPlan] = useState('');
  const dispatch = useDispatch();
  const location = useLocation();
  const { edit, object } = location.state || { edit: false, object: {} };

  const schema = Yup.object().shape({
    start_date: Yup.date('Data inválida!')
      .min(
        subDays(new Date(), 1),
        'A data de inicio deve ser a partir de hoje!'
      )
      .required('Data de início é obrigatório!'),
  });

  useEffect(() => {
    dispatch(getPlansRequest());
    dispatch(getStudentsRequest());
  }, [dispatch]);

  useEffect(() => {
    if (edit) {
      setSelectedStudent({ value: object.student_id, label: object.name });
      setSelectedPlan({ value: object.plan.id, label: object.title });
      setEndDate(format(parseISO(object.end_date), 'yyyy-MM-dd'));
      setPrice(object.price);
      setData({
        start_date: format(parseISO(object.start_date), 'yyyy-MM-dd'),
      });
    }
  }, [edit, object]);

  function calculatePriceAndEndDate() {
    const start_date = document.getElementById('start_date');
    const sPlan = plans.find(p => p.id === selectedPlan.value);
    if (sPlan && start_date.value !== '') {
      const date = addMonths(parseISO(start_date.value), sPlan.duration);
      setPrice(sPlan.price * sPlan.duration);
      setEndDate(format(date, 'yyyy-MM-dd'));
    }
  }

  useEffect(() => {
    calculatePriceAndEndDate();
  }, [selectedPlan]);

  const loadOptions = inputValue => {
    return api
      .get('/students', { params: { name: inputValue } })
      .then(response => {
        const options = response.data.map(student => ({
          value: student.id,
          label: student.name,
        }));
        return options;
      })
      .catch(error => {
        console.tron.log(error);
      });
  };

  function handleSubmit(formData) {
    const { start_date } = formData;
    if (!edit)
      dispatch(
        createEnrollment({
          student_id: selectedStudent.value,
          plan_id: selectedPlan.value,
          start_date,
        })
      );
    else
      dispatch(
        editEnrollment({
          id: object.id,
          plan_id: selectedPlan.value,
          start_date,
        })
      );
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
        <label htmlFor="student" style={{ marginBottom: 20 }}>
          Aluno
          <AsyncSelect
            cacheOptions
            loadOptions={loadOptions}
            value={selectedStudent}
            onChange={selected => setSelectedStudent(selected)}
            defaultOptions={students}
            styles={{
              container: styles => ({
                ...styles,
                width: '100%',
                marginTop: 10,
              }),
              control: styles => ({ ...styles, width: '100%' }),
            }}
          />
        </label>
        <div>
          <label htmlFor="plan">
            Plano
            <Select
              name="plan"
              options={plansOptions}
              value={selectedPlan}
              onChange={plan => setSelectedPlan(plan)}
              styles={{
                container: styles => ({
                  ...styles,
                  width: '100%',
                }),
                control: styles => ({ ...styles, width: '100%' }),
              }}
            />
          </label>
          <label htmlFor="start_date">
            Data de início
            <Input
              name="start_date"
              type="date"
              id="start_date"
              onChange={calculatePriceAndEndDate}
            />
          </label>
          <label htmlFor="end_date">
            Data de término
            <Input
              name="end_date"
              type="date"
              id="end_date"
              disabled
              value={end_date}
            />
          </label>
          <label htmlFor="finalPrice">
            Valor Final
            <Input name="finalPrice" id="finalPrice" disabled value={price} />
          </label>
        </div>
      </Form>
    </Container>
  );
}
