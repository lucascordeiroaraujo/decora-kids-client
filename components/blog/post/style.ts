import styled from 'styled-components';

export default styled.article`
  width: 100%;
  margin-top: 100px;
  img {
    width: 100%;
    height: auto;
    float: left;
    max-width: 34%;
    margin: 0px 40px 20px 0px;
    border-radius: 10px;
    border-bottom: 8px solid ${props => props.theme.colors.secondary};
  }
  h1,
  h2,
  p {
    color: ${props => props.theme.colors.secondary};
    font-weight: normal;
  }
  h1 {
    font-size: calc(1.5rem + ((1vw - 2.5px) * 0.9581));
    line-height: calc(1.5625rem + ((1vw - 2.5px) * 1.497));
    margin-bottom: 40px;
    @media (min-width: 1920px) {
      font-size: 40px;
      line-height: 50px;
    }
  }
  h2 {
    font-size: calc(1.125rem + ((1vw - 2.5px) * 0.4192));
    line-height: calc(1.375rem + ((1vw - 2.5px) * 0.479));
    margin-bottom: 80px;
    @media (min-width: 1920px) {
      font-size: 25px;
      line-height: 30px;
    }
  }
  div.author-and-share {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 80px;
    span {
      color: ${props => props.theme.colors.secondary};
      font-size: calc(1rem + ((1vw - 2.5px) * 0.2395));
      @media (min-width: 1920px) {
        font-size: 20px;
      }
    }
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        margin-right: 15px;
      }
      a {
        margin-right: 10px;
      }
      button {
        cursor: pointer;
        background: none;
        border: none;
        &.copied svg {
          fill: #40c368;
        }
      }
      svg {
        width: 29px;
        height: 29px;
        transition: 0.5s;
        fill: ${props => props.theme.colors.secondary};
        &:hover {
          fill: ${props => props.theme.colors.info};
        }
      }
    }
  }
  p {
    font-size: calc(1rem + ((1vw - 2.5px) * 0.2395));
    line-height: calc(1.5rem + ((1vw - 2.5px) * 0.3593));
    margin-bottom: 50px;
    @media (min-width: 1920px) {
      font-size: 20px;
      line-height: 30px;
    }
  }
  div.both {
    clear: both;
  }
  @media (max-width: 992px) {
    img {
      max-width: 100%;
      margin-bottom: 40px;
    }
    h1,
    h2 {
      width: 100%;
      text-align: center;
    }
    h2,
    div.author-and-share {
      margin-bottom: 40px;
    }
    div.author-and-share {
      justify-content: center;
      flex-direction: column;
      & > span {
        margin-bottom: 20px;
      }
    }
    p {
      text-align: center;
    }
  }
`;
