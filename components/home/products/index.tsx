import React from 'react';

import Products from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

const cpProducts: React.FC = () => (
  <Products>
    <Container className="container">
      <h1 className="default-title">
        <Fade>
          <span>O que você Procura?</span>
        </Fade>
      </h1>

      <div>
        <Fade>
          <article>
            <a href="#" title="Confira">
              <span>Quadrinhos</span>
            </a>
          </article>
        </Fade>

        <Fade delay={200}>
          <article>
            <a href="#" title="Confira">
              <span>Edredons</span>
            </a>
          </article>
        </Fade>

        <Fade delay={400}>
          <article>
            <a href="#" title="Confira">
              <span>Móveis</span>
            </a>
          </article>
        </Fade>

        <Fade delay={600}>
          <article>
            <a href="#" title="Confira">
              <span>
                Artigos
                <br /> Gerais
              </span>
            </a>
          </article>
        </Fade>

        <Fade delay={800}>
          <article>
            <a href="#" title="Confira">
              <span>Luminárias</span>
            </a>
          </article>
        </Fade>
      </div>

      <Fade bottom delay={1000}>
        <a href="#" title="Confira" className="read-more">
          Quero ver todas!
        </a>
      </Fade>
    </Container>
  </Products>
);

export default cpProducts;
