import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 570px;
  margin-bottom: 150px;
  background: url(${require('~/public/images/background-cover-title-internal-pages.jpg')})
    right top no-repeat;
  div.container {
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    h1 {
      font-size: calc(1.875rem + ((1vw - 2.5px) * 1.7964));
      color: ${props => props.theme.colors.primary};
      @media (min-width: 1920px) {
        font-size: 60px;
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
