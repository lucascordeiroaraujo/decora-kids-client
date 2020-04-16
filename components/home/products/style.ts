import styled from 'styled-components';

export default styled.section`
  width: 100%;
  padding: 150px 0px;
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      article {
        width: 18%;
        min-height: 200px;
        border-radius: 20px;
        border: 8px solid ${props => props.theme.colors.secondary};
        position: relative;
        a {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 15px;
          position: absolute;
          top: 0px;
          left: 0px;
          border-radius: 15px;
          transition: 0.5s;
          background-color: ${props => props.theme.colors.light};
          span {
            text-align: center;
            font-size: calc(1.25rem + ((1vw - 2.5px) * 0.5988));
            word-break: break-all;
            color: ${props => props.theme.colors.secondary};
            @media (min-width: 1920px) {
              font-size: 30px;
            }
          }
        }
        &:before {
          content: '';
          position: absolute;
          z-index: -1;
          width: 100%;
          height: 95%;
          margin: 15px 0px 0px -22px;
          border-radius: 20px;
          transition: 0.5s;
          border: 8px solid ${props => props.theme.colors.secondary};
        }
        &:hover a {
          background-color: ${props => props.theme.colors.primary};
        }
        @media (max-width: 992px) {
          width: 48%;
          margin-bottom: 30px;
          border-width: 4px;
          min-height: 150px;
          a span br {
            display: none;
          }
          &:last-child {
            width: 100%;
            margin-bottom: 0px;
          }
          &:before {
            border-width: 4px;
            margin: 18px 0px 0px -14px;
          }
        }
        @media (max-width: 576px) {
          width: 100%;
          min-height: 80px;
          border-width: 2px;
          a {
            border-radius: 16px;
          }
          &:before {
            display: none;
          }
        }
      }
      &.centered {
        justify-content: center;
        article {
          margin: 0px 1%;
        }
      }
    }
    a.read-more {
      min-width: 18%;
      padding: 10px 20px;
      font-size: 24px;
      color: ${props => props.theme.colors.secondary};
      text-transform: lowercase;
      border-radius: 10px;
      margin-top: 80px;
      transition: 0.5s;
      border: 3px solid ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.primary};
      &:hover {
        background-color: transparent;
      }
      @media (max-width: 992px) {
        margin-top: 40px;
      }
    }
  }
  @media (max-width: 992px) {
    padding: 75px 0px;
  }
`;
