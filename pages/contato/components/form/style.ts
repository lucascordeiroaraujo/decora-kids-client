import styled from 'styled-components';

export default styled.form`
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    strong {
      font-size: calc(1.875rem + ((1vw - 2.5px) * 1.7964));
      line-height: calc(1.875rem + ((1vw - 2.5px) * 1.7964));
      color: ${props => props.theme.colors.secondary};
      margin: 100px 0px 40px 0px;
    }
    input,
    textarea {
      width: 100%;
      max-width: 950px;
      height: 60px;
      border: 5px solid ${props => props.theme.colors.secondary};
      border-radius: 10px;
      margin-bottom: 20px;
      font-size: calc(1rem + ((1vw - 2.5px) * 0.5389));
      color: ${props => props.theme.colors.secondary};
      padding: 10px;
      @media (min-width: 1920px) {
        font-size: 25px;
      }
      &::placeholder {
        color: ${props => props.theme.colors.secondary};
      }
    }
    input[type='submit'] {
      max-width: 240px;
      height: 70px;
      cursor: pointer;
      transition: 0.5s;
      color: ${props => props.theme.colors.primary};
      border: none;
      background-color: ${props => props.theme.colors.secondary};
      &:hover {
        background-color: ${props => props.theme.colors.info};
      }
    }
    textarea {
      height: 290px;
    }
    @media (max-width: 992px) {
      input,
      textarea {
        text-align: center;
        &[type='submit'] {
          max-width: 100%;
        }
      }
    }
  }
`;
