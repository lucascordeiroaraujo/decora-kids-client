import React from 'react';

import Buy from './style';

import { Container } from '~/public/styles/global';

import DoubleArrowRight from '~/public/images/svg/doubleArrowRight';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

const cpBuy: React.FC = () => {
  const { error, contact } = useSelector((state: applicationState) => ({
    error: state.contact.error,
    contact: state.contact.data
  }));

  if (error || !contact.ecommerce) return null;

  return (
    <Buy>
      <Container className="container">
        <strong>Compre Agora!</strong>

        <a
          href={contact.ecommerce}
          title="Monte seu quartinho"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>
            Monte seu quartinho
            <br />
            no conforto do seu lar
          </span>

          <DoubleArrowRight />
        </a>
      </Container>
    </Buy>
  );
};

export default cpBuy;
