import React from 'react';

import InternalTitle from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

interface Iprops {
  title: string;
}

const cpInternalTitle: React.FC<Iprops> = ({ title }) => (
  <InternalTitle>
    <Container className="container">
      <Fade bottom>
        <h1 dangerouslySetInnerHTML={{ __html: title }} />
      </Fade>

      {title === 'Produtos' && (
        <>
          <a href="/contato" title="Solicitar" className="request-a-quote">
            Solicite um Orçamento
          </a>

          <a href="/contato" title="Encomendar" className="place-an-order">
            Faça uma Encomenda
          </a>
        </>
      )}
    </Container>
  </InternalTitle>
);

export default cpInternalTitle;
