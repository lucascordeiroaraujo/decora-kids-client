import React from 'react';

import Instagram from './style';

import { Container } from '~/public/styles/global';

const cpInstagram: React.FC = () => (
  <Instagram>
    <Container className="container">
      <h1 className="default-title instagram">
        <span>Siga Decora Kids no Instagram</span>
      </h1>

      <div>
        <img
          src={require('~/public/images/placeholder/instagram.jpg')}
          alt=""
          title=""
          width="554"
          height="554"
        />

        <img
          src={require('~/public/images/placeholder/instagram.jpg')}
          alt=""
          title=""
          width="554"
          height="554"
        />

        <img
          src={require('~/public/images/placeholder/instagram.jpg')}
          alt=""
          title=""
          width="554"
          height="554"
        />

        <img
          src={require('~/public/images/placeholder/instagram.jpg')}
          alt=""
          title=""
          width="554"
          height="554"
        />

        <img
          src={require('~/public/images/placeholder/instagram.jpg')}
          alt=""
          title=""
          width="554"
          height="554"
        />

        <img
          src={require('~/public/images/placeholder/instagram.jpg')}
          alt=""
          title=""
          width="554"
          height="554"
        />
      </div>
    </Container>
  </Instagram>
);

export default cpInstagram;
