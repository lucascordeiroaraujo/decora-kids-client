import React from 'react';

import Footer from './style';

import { Container } from '~/public/styles/global';

import WhatsApp from '~/public/images/svg/whatsapp';

import { useTranslation, withTranslation } from 'react-i18next';

const cpFooter: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Footer>
      <Container className="container">
        <div>
          <img
            src={require('~/public/images/decora-kids-primary.png')}
            alt="Decora Kids"
            title="Decora Kids"
            width="320"
            height="94"
          />
        </div>

        <div>
          <address>
            Av Maringá 000
            <br />
            Londrina-PR
          </address>

          <a href="tel:" title={t('footer.call')}>
            00 0 0000.0000
          </a>

          <a
            href="tel:"
            title={t('footer.whatsApp')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
            <span>00 0 0000.0000</span>
          </a>
        </div>
      </Container>
    </Footer>
  );
};

export default withTranslation('common')(cpFooter);
