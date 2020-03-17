import React from 'react';

import Form from './style';

import { Container } from '~/public/styles/global';

const cpForm: React.FC = () => (
  <Form>
    <Container className="container">
      <strong>Fale Conosco</strong>

      <input type="text" name="name" placeholder="Nome" required />

      <input type="email" name="email" placeholder="E-mail" required />

      <textarea name="message" required placeholder="Mensagem"></textarea>

      <input type="submit" value="Enviar" />
    </Container>
  </Form>
);

export default cpForm;
