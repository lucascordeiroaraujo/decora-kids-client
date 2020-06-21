import React from 'react';

import { useSelector } from 'react-redux';

import applicationState from '~/store/interfaces';

import Partners from './style';

import { Container } from '~/public/styles/global';

const cpPartners: React.FC = () => {
  const { error, partners } = useSelector((state: applicationState) => ({
    error: state.partners.error,
    partners: state.partners.data.partners
  }));

  if (error) return null;

  return (
    <Partners>
      <Container className="container">
        <strong>Parceiros: </strong>
        <ul>
          {partners.map((partner: any) => (
            <li key={partner.image}>
              {partner.link && (
                <a
                  href={partner.link}
                  target="_blank"
                  rel="noopener noreferrer"
                ></a>
              )}

              <img src={partner.image} alt="" />
            </li>
          ))}
        </ul>
      </Container>
    </Partners>
  );
};

export default cpPartners;
