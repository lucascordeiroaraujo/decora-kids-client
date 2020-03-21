import React from 'react';

import Cat from './style';

interface Iprops {
  title: string;
  slug: string;
}

const cpCat: React.FC<Iprops> = ({ title, slug }) => (
  <Cat>
    <a
      href={`/blog/categoria/${slug}`}
      title="Confira os posts dessa categoria"
    >
      {title}
    </a>
  </Cat>
);

export default React.memo(cpCat);
