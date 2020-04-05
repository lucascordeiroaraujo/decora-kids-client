import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Header from './style';

import { Container } from '~/public/styles/global';

import Instagram from '~/public/images/svg/instagram';

import Facebook from '~/public/images/svg/facebook';

import OutsideClickHandler from 'react-outside-click-handler';

import Fade from 'react-reveal/Fade';

import { useTranslation, withTranslation } from 'react-i18next';

const cpHeader: React.FC = () => {
  const { error, contact } = useSelector((state: applicationState) => ({
    error: state.contact.error,
    contact: state.contact.data
  }));

  if (error) return null;

  const [menu, setMenu] = React.useState(false);

  const { t } = useTranslation();

  return (
    <Header>
      <Container className="container">
        <a href="/" title="Página inicial" className="logo">
          <img
            src={require('~/public/images/decora-kids.png')}
            alt="Decora Kids"
            title="Decora Kids"
            width="241"
            height="71"
          />
        </a>

        <ul className={menu ? 'active' : ''}>
          <Fade>
            <li>
              <a href="/" title={t('header.menu.start.title')}>
                {t('header.menu.start.text')}
              </a>
            </li>
          </Fade>

          <Fade delay={200}>
            <li>
              <a href="/quem-somos" title={t('header.menu.about.title')}>
                {t('header.menu.about.text')}
              </a>
            </li>
          </Fade>

          <Fade delay={400}>
            <li>
              <a href="/produtos" title={t('header.menu.products.title')}>
                {t('header.menu.products.text')}
              </a>
            </li>
          </Fade>

          <Fade delay={600}>
            <li>
              <a href="/blog" title={t('header.menu.blog.title')}>
                {t('header.menu.blog.text')}
              </a>
            </li>
          </Fade>

          <Fade delay={800}>
            <li>
              <a href="/contato" title={t('header.menu.contact.title')}>
                {t('header.menu.contact.text')}
              </a>
            </li>
          </Fade>
        </ul>

        <div>
          <Fade delay={200}>
            <a
              href={contact.instagram}
              title={t('header.shared.instagram')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </Fade>

          <Fade delay={400}>
            <a
              href={contact.facebook}
              title={t('header.shared.facebook')}
              target="_blank"
              rel="noopener noreferrer"
              className="facebook"
            >
              <Facebook />
            </a>
          </Fade>

          <OutsideClickHandler
            onOutsideClick={() => {
              setMenu(false);
            }}
          >
            <Fade>
              <button
                className={menu ? 'active' : ''}
                onClick={() => setMenu(!menu)}
              >
                <span />
              </button>
            </Fade>
          </OutsideClickHandler>
        </div>
      </Container>
    </Header>
  );
};

export default withTranslation('common')(cpHeader);
