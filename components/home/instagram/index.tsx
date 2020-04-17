import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Instagram from './style';

import { Container } from '~/public/styles/global';

import Fade from 'react-reveal/Fade';

const cpInstagram: React.FC = () => {
  const { error, instagram } = useSelector((state: applicationState) => ({
    error: state.home.error,
    instagram: state.home.data
  }));

  if (error || !instagram) return null;

  return (
    <Instagram>
      <Container className="container">
        <h1 className="default-title instagram">
          <Fade>
            <span>Siga Decora Kids no Instagram</span>
          </Fade>
        </h1>

        <div>
          {instagram.map((picture: any, index: number) => (
            <Fade key={index * 200}>
              <img
                src={picture.images.thumbnail.url}
                alt=""
                title=""
                width={picture.images.thumbnail.width}
                height={picture.images.thumbnail.height}
              />
            </Fade>
          ))}
        </div>
      </Container>
    </Instagram>
  );
};

export default cpInstagram;
