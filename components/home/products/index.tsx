import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { iProductsCats } from '~/store/ducks/products';

import Products from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

import slugify from 'react-slugify';

const cpProducts: React.FC = () => {
  const { error, products } = useSelector((state: applicationState) => ({
    error: state.products.error,
    products: state.products.data
  }));

  if (error) return null;

  return (
    <Products>
      <Container className="container">
        <h1 className="default-title">
          <Fade>
            <span>O que você Procura?</span>
          </Fade>
        </h1>

        <div className={products.length <= 4 ? 'centered' : ''}>
          {products.slice(0, 5).map((cat: iProductsCats, index: number) => (
            <Fade key={index * 200}>
              <article>
                <a
                  href={`/produtos#${slugify(cat.category_name)}`}
                  title="Confira"
                >
                  <span>{cat.category_name}</span>
                </a>
              </article>
            </Fade>
          ))}
        </div>

        <Fade bottom delay={1000}>
          <a href="/produtos" title="Confira" className="read-more">
            Quero ver todas!
          </a>
        </Fade>
      </Container>
    </Products>
  );
};

export default cpProducts;
