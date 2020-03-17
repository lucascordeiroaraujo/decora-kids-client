import React from 'react';

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

const cpMap: React.FC = () => (
  <Container className="container">
    <Map>
      <div>
        <address>
          <span>
            Av. Maringá, 1995
            <br />
            Londrina-PR
          </span>

          <img src={require('~/public/images/icons-png/pin.png')} alt="" />
        </address>

        <div>
          <a href="tel:" title="Ligar">
            00 0000.0000
          </a>

          <img src={require('~/public/images/icons-png/phone.png')} alt="" />
        </div>

        <div>
          <a href="tel:" title="Ligar">
            00 0 0000.0000
          </a>

          <img src={require('~/public/images/icons-png/whatsapp.png')} alt="" />
        </div>
      </div>

      <div>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDRzemQFZiB0KHpUkt869JPPiYUcaOf964' }}
          defaultCenter={{
            lat: -23.3195011,
            lng: -51.1764517
          }}
          defaultZoom={15}
        >
          <AnyReactComponent
            lat={-23.3195011}
            lng={-51.1764517}
            text="Decora Kids"
          />
        </GoogleMapReact>
      </div>
    </Map>
  </Container>
);

export default cpMap;
