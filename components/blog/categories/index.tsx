import React from 'react';

import Categories from './style';

import Cat from './components/cat';

const cpCategories: React.FC = () => (
  <Categories>
    <Cat title="Quartos" slug="quartos" />

    <Cat title="Inspiração" slug="inspiracao" />

    <Cat title="Parceiros" slug="parceiros" />

    <Cat title="Fraldário" slug="fraldario" />

    <Cat title="Brinquedoteca" slug="brinquedoteca" />

    <Cat title="Espaço Kids" slug="espaco-kids" />
  </Categories>
);

export default cpCategories;
