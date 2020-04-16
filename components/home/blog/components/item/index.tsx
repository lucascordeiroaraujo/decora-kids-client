import React from 'react';

import { Ipost } from '~/store/ducks/blog';

import BlogItem from './style';

import Fade from 'react-reveal/Fade';

const cpBlogItem: React.FC<Ipost> = props => (
  <BlogItem className="blog-item">
    <div
      className="item-image"
      style={{ backgroundImage: `url(${props.acf.image.sizes['blog-thumb']})` }}
    />

    <div className="item-info">
      <Fade bottom>
        <h1>
          <a href={`/blog/${props.slug}`} title="Confira">
            {props.title.rendered}
          </a>
        </h1>
      </Fade>

      <Fade bottom delay={200}>
        <p>
          <a href={`/blog/${props.slug}`} title="Confira">
            {props.acf.subtitle}
          </a>
        </p>
      </Fade>

      <Fade bottom delay={400}>
        <span>{props.acf.author.display_name}</span>
      </Fade>
    </div>

    <Fade bottom delay={800}>
      <a href={`/blog/${props.slug}`} title="Confira" className="read-more">
        Ler &gt;
      </a>
    </Fade>
  </BlogItem>
);

export default React.memo(cpBlogItem);
