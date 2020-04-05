import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Description from './style';

import { Container } from '~/public/styles/global';

import InternalTitle from '~/components/global/internalTitle';

import Fade from 'react-reveal/Fade';

const cpDescription: React.FC = () => {
  const { error, description } = useSelector((state: applicationState) => ({
    error: state.about.error,
    description: state.about.data.description
  }));

  if (error) return null;

  return (
    <Description>
      <InternalTitle title="Quem Somos?" />

      <Container>
        <Fade>
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Fade>
      </Container>
    </Description>
  );
};

export default cpDescription;
