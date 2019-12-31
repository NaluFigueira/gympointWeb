/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import logo from '~/assets/logo.png';

export default function SignIn() {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Insira um e-mail válido!')
      .required('E-mail é obrigatório!'),
    password: Yup.string().required('Senha é obrigatória'),
  });

  const [loading, setLoading] = useState(false);

  function handleSubmit({ email, password }) {
    setLoading(true);
    // eslint-disable-next-line no-console
    console.log({ email, password });
    setLoading(false);
  }

  return (
    <>
      <img src={logo} alt="Gympoint" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <label htmlFor="email">
          Seu e-mail:
          <Input name="email" type="email" id="email" />
        </label>
        <label htmlFor="password">
          Sua senha:
          <Input name="password" type="password" id="password" />
        </label>

        <button type="submit">{loading ? 'Carregando...' : 'Acessar'}</button>
        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
}
