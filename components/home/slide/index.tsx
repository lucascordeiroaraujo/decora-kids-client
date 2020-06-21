import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Slide from './style';

import Carousel from 'react-multi-carousel';

import 'react-multi-carousel/lib/styles.css';

const cpSlide: React.FC = () => {
  const { error, slideshow } = useSelector((state: applicationState) => ({
    error: state.home.error,
    slideshow: state.home.data.slideshow
  }));

  if (error) return null;

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1200 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 1200, min: 992 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 992, min: 768 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 768, min: 0 },
      items: 1
    }
  };

  return (
    <Slide>
      <Carousel className="react-multi-carousel" responsive={responsive}>
        {slideshow.map((slide: any) => (
          <div key={slide.image}>
            {slide.link && <a href={slide.link} title=""></a>}

            <img
              src={slide.image}
              alt="Decora Kids"
              title="Decora Kids"
              className={slide.imagem_mobile ? 'desktop' : ''}
            />

            {slide.imagem_mobile && (
              <img
                src={slide.imagem_mobile}
                alt="Decora Kids"
                title="Decora Kids"
                className="mobile"
              />
            )}
          </div>
        ))}
      </Carousel>
    </Slide>
  );
};

export default cpSlide;
