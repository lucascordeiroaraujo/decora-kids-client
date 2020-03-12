import React from 'react';

import Header from './style';

import { Container } from '~/public/styles/global';

import Instagram from '~/public/images/svg/instagram';

import Facebook from '~/public/images/svg/facebook';

import OutsideClickHandler from 'react-outside-click-handler';

import Fade from 'react-reveal/Fade';

const cpHeader: React.FC = () => {
  const [menu, setMenu] = React.useState(false);

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
              <a href="/" title="Página inicial">
                início
              </a>
            </li>
          </Fade>

          <Fade delay={200}>
            <li>
              <a href="/quem-somos" title="História da Decora Kids">
                quem somos
              </a>
            </li>
          </Fade>

          <Fade delay={400}>
            <li>
              <a href="/produtos" title="Conheça nossos produtos">
                produtos
              </a>
            </li>
          </Fade>

          <Fade delay={600}>
            <li>
              <a href="/blog" title="Acesse nosos blog">
                blog
              </a>
            </li>
          </Fade>

          <Fade delay={800}>
            <li>
              <a href="/contato" title="Entre em contato">
                contato
              </a>
            </li>
          </Fade>
        </ul>

        <div>
          <Fade delay={200}>
            <a
              href="http://instagram.com"
              title="Siga a Decora Kids no Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram />
            </a>
          </Fade>

          <Fade delay={400}>
            <a
              href="http://facebook.com"
              title="Curta a página da Decora Kids no Facebook"
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

export default cpHeader;
