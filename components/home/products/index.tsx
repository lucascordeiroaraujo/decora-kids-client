import React from 'react';

import Products from './style';

import { Container } from '~/public/styles/global';

const cpProducts: React.FC = () => (
  <Products>
    <Container className="container">
      <h1>
        <span>O que você Procura?</span>
      </h1>

      <div>
        <article>
          <a href="#" title="Confira">
            <span>Quadrinhos</span>
          </a>
        </article>

        <article>
          <a href="#" title="Confira">
            <span>Edredons</span>
          </a>
        </article>

        <article>
          <a href="#" title="Confira">
            <span>Móveis</span>
          </a>
        </article>

        <article>
          <a href="#" title="Confira">
            <span>
              Artigos
              <br /> Gerais
            </span>
          </a>
        </article>

        <article>
          <a href="#" title="Confira">
            <span>Luminárias</span>
          </a>
        </article>
      </div>
    </Container>
  </Products>
);

export default cpProducts;
