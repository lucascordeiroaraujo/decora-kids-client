import React from 'react';

import Contacts from './style';

import { Container } from '~/public/styles/global';

import WhatsApp from '~/public/images/svg/whatsapp';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import { useTranslation, withTranslation } from 'react-i18next';

const cpContacts: React.FC = () => {
  const { error, contact } = useSelector((state: applicationState) => ({
    error: state.contact.error,
    contact: state.contact.data
  }));

  const splitPhone = !error ? contact.phone.split(' ') : '';

  const splitWhatsApp = !error ? contact.whatsapp.split(' ') : '';

  const { t } = useTranslation();

  if (error) return null;

  return (
    <Contacts>
      <Container className="container">
        <div className="logo-address">
          <img
            src={require('~/public/images/decora-kids-primary.png')}
            alt="Decora Kids"
            title="Decora Kids"
            width="320"
            height="94"
          />

          <address>{contact.address.address}</address>
        </div>

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
          <img
            src={require('~/public/images/icons-png/whatsapp-footer.png')}
            alt=""
            title=""
            className="whatsapp"
          />
        </a>

        <div className="phones-email">
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

          {contact.email && (
            <a href={`mailto:${contact.email}`} title="Enviar e-mail">
              {contact.email}
            </a>
          )}
        </div>
      </Container>
    </Contacts>
  );
};

export default withTranslation('common')(cpContacts);
