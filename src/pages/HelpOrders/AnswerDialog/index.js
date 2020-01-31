import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import PropTypes from 'prop-types';
import Button from '~/components/Button';

import { Container } from './styles';

export default function AnswerDialog({ question }) {
  return (
    <Container>
      <Form>
        <div>
          <h5>PERGUNTA DO ALUNO</h5>
          <p>{question}</p>
        </div>
        <div>
          <h5>SUA RESPOSTA</h5>
          <Input
            name="answer"
            placeholder="Insira sua resposta aqui..."
            id="answer"
            multiline
          />
        </div>
        <Button title="Responder aluno" type="submit" />
      </Form>
    </Container>
  );
}

AnswerDialog.propTypes = {
  question: PropTypes.string.isRequired,
};
