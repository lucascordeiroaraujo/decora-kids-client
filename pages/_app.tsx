import React from 'react';

import App from 'next/app';

import Head from 'next/head';

import { ThemeProvider } from 'styled-components';

import AppStoreProvider from '~/store/AppStoreProvider';

import GlobalStyles from '~/public/styles/global';

import 'react-app-polyfill/ie9';

import light from '~/public/styles/themes/light';

import NProgress from 'nprogress';

import Router from 'next/router';

import { I18nextProvider } from 'react-i18next';

import i18n from '~/i18n';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());

Router.events.on('routeChangeError', () => NProgress.done());

interface StoreProps {
  Component: React.Component;
}

class MyApp extends App<StoreProps> {
  static async getInitialProps({
    Component,
    ctx
  }: {
    Component: any;
    ctx: any;
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Decora Kids</title>
          <link
            rel="apple-touch-icon"
            sizes="57x57"
            href={require('~/public/images/icons/apple-icon-57x57.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="60x60"
            href={require('~/public/images/icons/apple-icon-60x60.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="72x72"
            href={require('~/public/images/icons/apple-icon-72x72.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href={require('~/public/images/icons/apple-icon-76x76.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={require('~/public/images/icons/apple-icon-114x114.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={require('~/public/images/icons/apple-icon-120x120.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={require('~/public/images/icons/apple-icon-144x144.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={require('~/public/images/icons/apple-icon-152x152.png')}
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={require('~/public/images/icons/apple-icon-180x180.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href={require('~/public/images/icons/android-icon-192x192.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={require('~/public/images/icons/favicon-32x32.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href={require('~/public/images/icons/favicon-96x96.png')}
          />

          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={require('~/public/images/icons/favicon-16x16.png')}
          />

          <link
            rel="manifest"
            href={require('~/public/images/icons/manifest.json')}
          />

          <meta
            name="msapplication-TileImage"
            content={require('~/public/images/icons/ms-icon-144x144.png')}
          />

          <meta name="msapplication-TileColor" content="#8b8065" />

          <meta name="theme-color" content="#8b8065" />
        </Head>

        <AppStoreProvider>
          <I18nextProvider i18n={i18n}>
            <ThemeProvider theme={light}>
              <>
                <GlobalStyles />
                <Component {...pageProps} />
              </>
            </ThemeProvider>
          </I18nextProvider>
        </AppStoreProvider>

        <noscript>
          <style
            dangerouslySetInnerHTML={{
              __html: '.react-reveal {opacity: 1}'
            }}
          />
        </noscript>
      </>
    );
  }
}

export default MyApp;
