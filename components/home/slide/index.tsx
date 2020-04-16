import React from 'react';

import Slide from './style';

const cpSlide: React.FC = () => (
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

export default cpSlide;
