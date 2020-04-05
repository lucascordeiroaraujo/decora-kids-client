import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Footer from './style';

import { Container } from '~/public/styles/global';

import WhatsApp from '~/public/images/svg/whatsapp';

import { useTranslation, withTranslation } from 'react-i18next';

const cpFooter: React.FC = () => {
  const { error, contact } = useSelector((state: applicationState) => ({
    error: state.contact.error,
    contact: state.contact.data
  }));

  if (error) return null;

  const splitPhone = contact.phone.split(' ');

  const splitWhatsApp = contact.whatsapp.split(' ');

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
          <address>{contact.address.address}</address>

          {contact.phone && (
            <a
              href={`tel:${splitPhone.join('').replace(/[+()-]/g, '')}`}
              title={t('footer.call')}
            >
              {contact.phone}
            </a>
          )}

          <a
            href={`https://api.whatsapp.com/send?phone=${splitWhatsApp
              .join('')
              .replace(
                /[+()-]/g,
                ''
              )}&text=Olá, estou entrando em contato através do site.`}
            title={t('footer.whatsApp')}
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsApp />
            <span>{contact.whatsapp}</span>
          </a>
        </div>
      </Container>
    </Footer>
  );
};

export default withTranslation('common')(cpFooter);
