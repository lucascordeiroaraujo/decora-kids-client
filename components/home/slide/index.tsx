import React from 'react';

import Slide from './style';

import { useSelector } from 'react-redux';

import ApplicationState from '~/store/interfaces';

const cpSlide: React.FC = () => {
  const { data, loading, error } = useSelector((state: ApplicationState) => ({
    data: state,
    loading: state.home.loading,
    error: state.home.error
  }));

  if (error) return null;

  console.log(data, loading, error);

  return (
    <Slide>
      <div>
        <img
          src={require('~/public/images/placeholder/decora-kids-slide-01-desktop.jpg')}
          alt="Tudo para o seu quartinho perfeito"
          title="Tudo para o seu quartinho perfeito"
          width="1920"
          height="956"
          className="desktop"
        />

        <img
          src={require('~/public/images/placeholder/decora-kids-slide-01-mobile.jpg')}
          alt="Tudo para o seu quartinho perfeito"
          title="Tudo para o seu quartinho perfeito"
          width="956"
          height="956"
          className="mobile"
        />
      </div>
    </Slide>
  );
};

export default cpSlide;
