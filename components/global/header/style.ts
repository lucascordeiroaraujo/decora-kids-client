import styled from 'styled-components';

export default styled.header`
  width: 100%;
  padding: 30px 0px;
  background: ${props => props.theme.colors.primary};
  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
      transition: 0.5s;
      li {
        margin: 0px 23px;
        a {
          font-size: calc(1.25rem + ((1vw - 2.5px) * 0.5988));
          @media (min-width: 1920px) {
            font-size: 30px;
          }
          text-transform: lowercase;
          color: ${props => props.theme.colors.secondary};
          transition: 0.5s;
        }
        &:hover a {
          color: ${props => props.theme.colors.info};
        }
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      a {
        height: 33px;
        svg {
          width: 33px;
          height: 33px;
          transition: 0.5s;
          fill: ${props => props.theme.colors.secondary};
        }
        &.facebook {
          margin-left: 40px;
        }
        &:hover svg {
          fill: ${props => props.theme.colors.info};
        }
      }
      button {
        width: 33px;
        height: 28px;
        position: relative;
        margin-left: 30px;
        border: none;
        display: none;
        cursor: pointer;
        background-color: transparent;
        &:before,
        &:after,
        span {
          content: '';
          position: absolute;
          left: 0px;
          width: 100%;
          height: 2px;
          transition: 0.5s;
          background-color: ${props => props.theme.colors.secondary};
        }
        &:before {
          top: 0px;
        }
        &:after {
          bottom: 0px;
        }
        span {
          top: 50%;
          transform: translate(0px, -50%);
        }
        &.active {
          &:before,
          &:after {
            top: 12px;
          }
          &:before {
            transform: rotate(45deg);
          }
          &:after {
            transform: rotate(-45deg);
          }
          span {
            opacity: 0;
          }
        }
      }
    }
    @media (max-width: 1140px) {
      a.logo {
        max-width: 50%;
        img {
          width: 100%;
          height: auto;
        }
      }
      ul {
        position: absolute;
        z-index: 10;
        top: 60px;
        right: 15px;
        width: 170px;
        flex-direction: column;
        border-radius: 5px;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
        padding: 5px 10px;
        opacity: 0;
        pointer-events: none;
        background-color: ${props => props.theme.colors.light};
        li {
          width: 100%;
          text-align: center;
          margin: 5px 0px;
          a {
            font-size: 20px;
          }
        }
        &.active {
          opacity: 1;
          pointer-events: all;
        }
      }
      div {
        a {
          height: 28px;
          svg {
            width: 28px;
            height: 28px;
          }
          &.facebook {
            margin-left: 15px;
          }
        }
        button {
          display: block;
        }
      }
    }
  }
`;
