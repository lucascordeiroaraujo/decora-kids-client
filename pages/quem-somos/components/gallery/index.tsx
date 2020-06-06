import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Gallery from './style';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const cpGallery: React.FC = () => {
  const { error, gallery } = useSelector((state: applicationState) => ({
    error: state.about.error,
    gallery: state.about.data.gallery
  }));

  if (error) return null;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <Gallery>
      <Carousel className="react-multi-carousel" responsive={responsive}>
        {gallery.map((image: any) => (
          <img src={image.url} alt="" />
        ))}
      </Carousel>
    </Gallery>
  );
};

export default cpGallery;
