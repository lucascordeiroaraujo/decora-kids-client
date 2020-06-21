import React from 'react';

import Modal from './style';

import { iProducts } from '~/store/ducks/products';

interface Iprops {
  product: iProducts;
  modalInfo: {
    productIndex: number;
    isOpen: boolean;
    disablePrev: boolean;
    disableNext: boolean;
  };
  closeModal: Function;
  prevModal: Function;
  nextModal: Function;
}

const cpModal: React.FC<Iprops> = props => {
  const linkBuyNow =
    props.product.link ||
    'https://api.whatsapp.com/send?phone=5543991052642&text=Ol%C3%A1.%20Vi%20esse%20produto%20no%20site%20e%20gostaria%20de%20saber%20mais%20detalhes.%20';

  return (
    <Modal className={props.modalInfo.isOpen ? 'active' : ''}>
      <div className="container">
        <button className="close" onClick={() => props.closeModal()} />

        <div className="controls">
          <button
            className={`controls prev ${
              props.modalInfo.disablePrev ? 'disabled' : ''
            }`}
            onClick={() => props.prevModal()}
          >
            &lt;
          </button>

          <button
            className={`controls next ${
              props.modalInfo.disableNext ? 'disabled' : ''
            }`}
            onClick={() => props.nextModal()}
          >
            &gt;
          </button>
        </div>

        <div>
          <img src={props.product.image} alt="Decora Kids" />

          <div>
            <p className={!props.product.info ? 'full' : ''}>
              {props.product.name}
            </p>

            {props.product.info && <span>{props.product.info}</span>}
          </div>

          <a
            href={linkBuyNow}
            title="Acessar E-commerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            Comprar Agora
          </a>
        </div>
      </div>
    </Modal>
  );
};

export default cpModal;
