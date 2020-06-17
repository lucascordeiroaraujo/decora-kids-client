import React from 'react';

import Architect from './style';

import { Container } from '~/public/styles/global';

const cpArchitect: React.FC = () => (
  <Architect>
    <Container className="container">
      <div>
        <strong>Fale com nossa Arquiteta</strong>

        <p>
          Temos uma profissional pronta para te ajudar a ter o quartinho mais
          lindo e confortável do seu bebê
        </p>
      </div>
    </Container>
  </Architect>
);

export default cpArchitect;
