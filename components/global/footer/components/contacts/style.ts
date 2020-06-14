import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  padding: 100px 0px;
  background-color: ${props => props.theme.colors.secondary};
  div.container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      flex-direction: column;
      address,
      a {
        font-size: 23px;
        color: ${props => props.theme.colors.primary};
      }
      &.logo-address {
        justify-content: flex-start;
        align-items: center;
        img {
          max-width: 100%;
          height: auto;
        }
        address {
          max-width: 320px;
          margin-top: 40px;
          font-style: normal;
        }
      }
      &.phones-email {
        justify-content: flex-end;
        align-items: flex-end;
        a {
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: right;
          margin-bottom: 10px;
          word-break: break-all;
          svg {
            width: 18px;
            height: 18px;
            margin-right: 10px;
            fill: ${props => props.theme.colors.primary};
          }
          &:hover {
            text-decoration: underline;
          }
          &:last-child {
            margin-bottom: 0px;
          }
        }
      }
    }
    @media (max-width: 992px) {
      justify-content: center;
      flex-direction: column;
      address,
      a {
        text-align: center !important;
      }
      div {
        width: 100%;
        justify-content: center !important;
        align-items: center !important;
      }
      img.whatsapp {
        margin: 50px 0px;
      }
    }
  }
  @media (max-width: 992px) {
    height: auto;
    padding: 20px 0px;
  }
`;
