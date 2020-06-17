import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Description from './style';

import Fade from 'react-reveal/Fade';

const cpDescription: React.FC = () => {
  const { error, description } = useSelector((state: applicationState) => ({
    error: state.about.error,
    description: state.about.data.description
  }));

  if (error) return null;

  return (
    <Description>
      <Fade>
        <div dangerouslySetInnerHTML={{ __html: description }} />
      </Fade>
    </Description>
  );
};

export default cpDescription;
