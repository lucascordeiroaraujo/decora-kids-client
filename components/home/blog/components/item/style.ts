import styled from 'styled-components';

export default styled.article`
  width: 32%;
  margin-right: 2%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  padding: 70px 40px;
  min-height: 640px;
  border-radius: 10px;
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  border-bottom: 6px solid #7c8b8a;
  background: ${props => props.theme.colors.secondary};
  & > div {
    &.item-image {
      position: absolute;
      z-index: 1;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      opacity: 0.1;
      background-repeat: no-repeat;
      background-size: cover;
    }
    &.item-info {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      text-align: center;
      h1 {
        margin-bottom: 30px;
        a {
          font-size: calc(1.5625rem + ((1vw - 2.5px) * 0.8982));
          line-height: calc(1.875rem + ((1vw - 2.5px) * 0.8982));
          color: ${props => props.theme.colors.light};
          @media (min-width: 1920px) {
            font-size: 40px;
            line-height: 42px;
          }
        }
        &:hover a {
          opacity: 0.8;
        }
      }
      p,
      span {
        font-size: calc(1.125rem + ((1vw - 2.5px) * 0.3593));
        line-height: calc(1.375rem + ((1vw - 2.5px) * 0.3593));
        @media (min-width: 1920px) {
          font-size: 24px;
          line-height: 24px;
        }
        a {
          color: ${props => props.theme.colors.primary};
        }
      }
      h1:hover a,
      p:hover a {
        opacity: 0.8;
      }
      span {
        margin-top: 30px;
        color: ${props => props.theme.colors.light};
      }
    }
  }
  a.read-more {
    width: 100%;
    position: relative;
    z-index: 2;
    text-align: center;
    text-transform: uppercase;
    font-size: calc(1.125rem + ((1vw - 2.5px) * 0.3593));
    @media (min-width: 1920px) {
      font-size: 24px;
    }
    color: ${props => props.theme.colors.primary};
    &:hover {
      text-decoration: underline;
    }
  }
  &:hover {
    border-bottom: 6px solid ${props => props.theme.colors.info};
  }
  &:last-child,
  &:nth-child(3n + 3) {
    margin-right: 0px;
  }
  @media (max-width: 992px) {
    width: 100%;
    margin-bottom: 50px;
    min-height: auto;
    padding: 35px;
    a.read-more {
      margin-top: 50px;
    }
    &:last-child {
      margin-bottom: 0px;
    }
  }
`;
