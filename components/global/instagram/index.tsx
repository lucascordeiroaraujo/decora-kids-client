import React from 'react';

import Instagram from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

const cpInstagram: React.FC = () => (
  <Instagram>
    <Container className="container">
      <h1 className="default-title instagram">
        <Fade>
          <span>Siga Decora Kids no Instagram</span>
        </Fade>
      </h1>

      <div>
        <Fade>
          <img
            src={require('~/public/images/placeholder/instagram.jpg')}
            alt=""
            title=""
            width="554"
            height="554"
          />
        </Fade>

        <Fade delay={200}>
          <img
            src={require('~/public/images/placeholder/instagram.jpg')}
            alt=""
            title=""
            width="554"
            height="554"
          />
        </Fade>

        <Fade delay={400}>
          <img
            src={require('~/public/images/placeholder/instagram.jpg')}
            alt=""
            title=""
            width="554"
            height="554"
          />
        </Fade>

        <Fade delay={600}>
          <img
            src={require('~/public/images/placeholder/instagram.jpg')}
            alt=""
            title=""
            width="554"
            height="554"
          />
        </Fade>

        <Fade delay={800}>
          <img
            src={require('~/public/images/placeholder/instagram.jpg')}
            alt=""
            title=""
            width="554"
            height="554"
          />
        </Fade>

        <Fade delay={1000}>
          <img
            src={require('~/public/images/placeholder/instagram.jpg')}
            alt=""
            title=""
            width="554"
            height="554"
          />
        </Fade>
      </div>
    </Container>
  </Instagram>
);

export default cpInstagram;
