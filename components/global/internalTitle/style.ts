import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 570px;
  margin-bottom: 100px;
  background: url(${require('~/public/images/background-cover-title-internal-pages.jpg')})
    right top no-repeat;
  div.container {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    h1 {
      font-size: calc(1.875rem + ((1vw - 2.5px) * 1.7964));
      color: ${props => props.theme.colors.primary};
      @media (min-width: 1920px) {
        font-size: 60px;
      }
    }
    a {
      width: 100%;
      max-width: 480px;
      height: 60px;
      font-size: calc(1.125rem + ((1vw - 2.5px) * 0.4192));
      text-align: center;
      padding: 15px;
      border-radius: 10px;
      transition: 0.5s;
      border: 2px solid transparent;
      &.request-a-quote {
        margin: 50px 0px 20px 0px;
        color: ${props => props.theme.colors.secondary};
        background-color: ${props => props.theme.colors.primary};
      }
      &.place-an-order {
        color: ${props => props.theme.colors.light};
        border-color: ${props => props.theme.colors.light};
      }
      &:hover {
        border-color: ${props => props.theme.colors.primary};
        color: ${props => props.theme.colors.primary};
        background-color: ${props => props.theme.colors.secondary};
      }
      @media (min-width: 1920px) {
        font-size: 25px;
      }
    }
  }
  @media (max-width: 992px) {
    margin-bottom: 75px;
    height: auto;
    padding: 50px 0px;
    background-position: center top;
    div.container {
      justify-content: center;
      align-items: center;
    }
  }
`;
