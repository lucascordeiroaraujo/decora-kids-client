import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Map from './style';

import { Container } from '~/public/styles/global';

import GoogleMapReact from 'google-map-react';

interface Iprops {
  text: string;
  lat: number;
  lng: number;
}

const AnyReactComponent = ({ text }: Iprops) => (
  <div className="map-pin">{text}</div>
);

const cpMap: React.FC = () => {
  const { error, contact } = useSelector((state: applicationState) => ({
    error: state.contact.error,
    contact: state.contact.data
  }));

  if (error) return null;

  const splitPhone = contact.phone.split(' ');

  const splitWhatsApp = contact.whatsapp.split(' ');

  const splitEmail = contact.email.split('@');

  return (
    <Container className="container">
      <Map>
        <div>
          <address>
            <span>{contact.address.address}</span>

            <img src={require('~/public/images/icons-png/pin.png')} alt="" />
          </address>

          {contact.phone && (
            <div>
              <a
                href={`tel:${splitPhone.join('').replace(/[+()-]/g, '')}`}
                title="Ligar"
              >
                {contact.phone}
              </a>

              <img
                src={require('~/public/images/icons-png/phone.png')}
                alt=""
              />
            </div>
          )}

          {contact.whatsapp && (
            <div>
              <a
                href={`https://api.whatsapp.com/send?phone=${splitWhatsApp
                  .join('')
                  .replace(
                    /[+()-]/g,
                    ''
                  )}&text=Olá, estou entrando em contato através do site.`}
                title="Ligar"
              >
                {contact.whatsapp}
              </a>

              <img
                src={require('~/public/images/icons-png/whatsapp.png')}
                alt=""
              />
            </div>
          )}

          {contact.email && (
            <div>
              <a href={`mailto:${contact.email}`} title="Enviar e-mail">
                {splitEmail[0]}@<br />
                {splitEmail[1]}
              </a>

              <img
                src={require('~/public/images/icons-png/email.png')}
                alt=""
              />
            </div>
          )}
        </div>

        <div>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyDRzemQFZiB0KHpUkt869JPPiYUcaOf964'
            }}
            defaultCenter={{
              lat: parseFloat(contact.address.lat),
              lng: parseFloat(contact.address.lng)
            }}
            defaultZoom={15}
          >
            <AnyReactComponent
              lat={contact.address.lat}
              lng={contact.address.lng}
              text="Decora Kids"
            />
          </GoogleMapReact>
        </div>
      </Map>
    </Container>
  );
};

export default cpMap;
