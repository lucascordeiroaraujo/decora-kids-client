import React from 'react';

import BlogItem from './style';

import Fade from 'react-reveal/Fade';

const cpBlogItem: React.FC = () => (
  <BlogItem>
    <div
      className="item-image"
      style={{ backgroundImage: 'url(https://picsum.photos/700/700)' }}
    />

    <div className="item-info">
      <Fade bottom>
        <h1>
          <a href="#" title="Confira">
            Conheça 17 dicas de cuidados com recém-nascido
          </a>
        </h1>
      </Fade>

      <Fade bottom delay={200}>
        <p>
          <a href="#" title="Confira">
            Chamada para a matéria como exemplo
          </a>
        </p>
      </Fade>

      <Fade bottom delay={400}>
        <span>por Lais Araújo</span>
      </Fade>
    </div>

    <Fade bottom delay={800}>
      <a href="#" title="Confira" className="read-more">
        Ler &gt;
      </a>
    </Fade>
  </BlogItem>
);

export default React.memo(cpBlogItem);
