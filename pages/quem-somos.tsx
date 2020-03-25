import * as React from 'react';

import Header from '~/components/global/header';

import Description from '~/components/about/description';

import Footer from '~/components/global/footer';

const pageAbout: React.FC = () => (
  <>
    <Header />

    <Description />

    <Footer />
  </>
);

export default pageAbout;
