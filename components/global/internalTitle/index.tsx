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
    </Container>
  </InternalTitle>
);

export default cpInternalTitle;
