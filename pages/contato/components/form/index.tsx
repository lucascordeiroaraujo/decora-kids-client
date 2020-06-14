import React from 'react';

import { useDispatch } from 'react-redux';

import Form from './style';

import { URL_API } from '~/utils/config';

import { Container } from '~/public/styles/global';

const cpForm: React.FC = () => {
  const dispatch = useDispatch();

  const INITIAL_STATE = {
    name: {
      key: 'Nome',
      value: ''
    },
    email: {
      key: 'E-mail',
      value: ''
    },
    message: {
      key: 'Mensagem',
      value: ''
    }
  };

  const [state, setState] = React.useState(INITIAL_STATE);

  const sendContact = async (event: any) => {
    event.preventDefault();

    dispatch({
      type: 'SET_FEEDBACK_FORM',
      payload: {
        showModal: true,
        showLoader: true,
        loaderLabel: 'Aguarde, enviando seu contato'
      }
    });

    const response = await fetch(`${URL_API}/decoraKids/sendContact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify({
        body: Object.values(state)
      })
    });

    if (response.status === 200) {
      dispatch({
        type: 'SET_FEEDBACK_FORM',
        payload: {
          showModal: true,
          showLoader: false,
          loaderLabel:
            '<span class="emoji success">✔</span><br/> Mensagem enviada com sucesso.'
        }
      });

      setState(INITIAL_STATE);
    } else {
      dispatch({
        type: 'SET_FEEDBACK_FORM',
        payload: {
          showModal: true,
          showLoader: false,
          loaderLabel:
            '<span class="emoji error">⚠</span><br/> Falha ao enviar seu contato.'
        }
      });
    }
  };

  return (
    <Form onSubmit={sendContact}>
      <Container className="container">
        <strong>Fale Conosco</strong>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          required
          value={state.name.value}
          onChange={e =>
            setState({
              ...state,
              name: {
                ...state.name,
                value: e.target.value
              }
            })
          }
        />

        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
          value={state.email.value}
          onChange={e =>
            setState({
              ...state,
              email: {
                ...state.email,
                value: e.target.value
              }
            })
          }
        />

        <textarea
          name="message"
          required
          placeholder="Mensagem"
          value={state.message.value}
          onChange={e =>
            setState({
              ...state,
              message: {
                ...state.message,
                value: e.target.value
              }
            })
          }
        />

        <input type="submit" value="Enviar" />
      </Container>
    </Form>
  );
};

export default cpForm;
