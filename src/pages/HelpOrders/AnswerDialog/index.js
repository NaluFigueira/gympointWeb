import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Button from '~/components/Button';

import { Container } from './styles';

export default function AnswerDialog({ question }) {
  const schema = Yup.object().shape({
    answer: Yup.string().required('Campo Obrigatório!'),
  });

  function handleSubmit(formData) {
    // eslint-disable-next-line no-console
    console.log(formData);
  }

  return (
    <Container>
      <Form
        schema={schema}
        onSubmit={handleSubmit}
        initialData={{ answer: '' }}
      >
        <div>
          <h4>PERGUNTA DO ALUNO</h4>
          <p>{question}</p>
        </div>
        <div>
          <h4>SUA RESPOSTA</h4>
          <Input
            name="answer"
            placeholder="Insira sua resposta aqui..."
            id="answer"
            multiline
          />
        </div>
        <Button noIcon title="Responder aluno" type="submit" />
      </Form>
    </Container>
  );
}

AnswerDialog.propTypes = {
  question: PropTypes.string.isRequired,
};
