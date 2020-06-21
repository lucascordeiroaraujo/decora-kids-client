import React from 'react';

import Architect from './style';

import { Container } from '~/public/styles/global';

const cpArchitect: React.FC = () => (
  <Architect>
    <Container className="container">
      <div>
        <a
          href="https://api.whatsapp.com/send?phone=5543991052642&text=Ol%C3%A1%20Patr%C3%ADcia%2C%20tudo%20bem%3F%20Vim%20pelo%20site%20e%20gostaria%20de%20saber%20mais%20detalhes%20sobre%20a%20consultoria%20e%20projetos%20para%20o%20quarto%20do%20meu%20filho.%20"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
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
