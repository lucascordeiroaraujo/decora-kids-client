import styled from 'styled-components';

export default styled.section`
  padding-bottom: 150px;
  p {
    font-size: calc(1.125rem + ((1vw - 2.5px) * 0.4192));
    line-height: calc(2.3125rem + ((1vw - 2.5px) * 0.4192));
    margin-bottom: 45px;
    color: ${props => props.theme.colors.secondary};
    @media (min-width: 1920px) {
      font-size: 25px;
      line-height: 44px;
    }
  }
  img {
    width: 100%;
    height: auto;
    max-width: 34%;
    margin-bottom: 40px;
    :nth-child(odd) {
      float: left;
      margin-right: 40px;
    }
    &:nth-child(even) {
      float: right;
      margin-left: 40px;
    }
  }
  @media (max-width: 992px) {
    padding-bottom: 75px;
  }
  @media (max-width: 768px) {
    p {
      text-align: center;
    }
    img {
      max-width: 100%;
      float: none;
      margin: 0px 0px 20px 0px;
    }
  }
`;
