import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: 2000;
  top: 0px;
  left: 0px;
  padding: 40px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: 0.5s;
  background-color: rgba(132, 151, 152, 0.9);
  div.container {
    width: 100%;
    max-width: 960px;
    max-height: 100%;
    padding: 0px 15px;
    margin: 0px auto;
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    button.close {
      position: absolute;
      top: 0px;
      right: -30px;
      width: 30px;
      height: 30px;
      border: none;
      cursor: pointer;
      background: url(${require('~/public/images/icons-png/close.png')})
        no-repeat center;
    }
    div.controls button {
      position: absolute;
      z-index: 2;
      top: 50%;
      padding: 15px;
      cursor: pointer;
      border: none;
      font-size: 25px;
      transition: 0.5s;
      border-radius: 5px;
      color: ${props => props.theme.colors.secondary};
      background-color: ${props => props.theme.colors.primary};
      &:hover {
        background-color: ${props => props.theme.colors.light};
      }
      &.prev {
        left: -45px;
      }
      &.next {
        right: -45px;
      }
      &.disabled {
        opacity: 0.5;
        pointer-events: none;
      }
    }
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      flex-direction: column;
      overflow: auto;
      padding-right: 10px;
      img {
        width: 100%;
        border-radius: 20px;
        margin-bottom: 30px;
        pointer-events: none;
      }
      & > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
        p,
        span {
          width: 48%;
          color: ${props => props.theme.colors.light};
          font-size: 22px;
          &.full {
            width: 100%;
            text-align: center;
          }
        }
        span {
          text-align: right;
        }
        @media (max-width: 768px) {
          flex-direction: column;
          p,
          span {
            width: 100%;
            text-align: center;
          }
          span {
            margin-top: 15px;
          }
        }
      }
      & > a {
        width: 100%;
        padding: 20px 0px;
        font-size: calc(1.125rem + ((1vw - 2.5px) * 0.7186));
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${props => props.theme.colors.secondary};
        transition: 0.5s;
        background-color: ${props => props.theme.colors.primary};
        @media (min-width: 1920px) {
          font-size: 30px;
        }
        &:hover {
          background-color: ${props => props.theme.colors.light};
        }
      }
      &::-webkit-scrollbar-track,
      &::-webkit-scrollbar {
        background-color: ${props => props.theme.colors.info};
      }
      &::-webkit-scrollbar {
        width: 5px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: ${props => props.theme.colors.primary};
      }
    }
  }
  &.active {
    opacity: 1;
    pointer-events: all;
  }
`;
