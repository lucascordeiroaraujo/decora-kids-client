import React from 'react';

import Head from 'next/head';

import { Container } from '~/public/styles/global';

const ErrorPage: any = () => (
  <>
    <Head>
      <title>Decora Kids</title>
      <meta name="robots" content="noindex" />
    </Head>
    <Container>404</Container>
  </>
);

export default ErrorPage;
