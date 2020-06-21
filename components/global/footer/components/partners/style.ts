import styled from 'styled-components';

export default styled.div`
  width: 100%;
  margin: 40px 0px;
  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    strong {
      font-size: calc(1.125rem + ((1vw - 2.5px) * 0.7186));
      color: ${props => props.theme.colors.secondary};
      @media (min-width: 1920px) {
        font-size: 30px;
      }
    }
    & > ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-wrap: wrap;
      li {
        position: relative;
        margin: 20px 30px;
        a {
          position: absolute;
          top: 0px;
          left: 0px;
          width: 100%;
          height: 100%;
        }
        img {
          max-width: 130px;
          height: auto;
          pointer-events: none;
        }
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
      strong,
      ul {
        width: 100%;
        text-align: center;
        justify-content: center;
        li {
          margin: 10px;
        }
      }
      strong {
        margin-bottom: 20px;
      }
    }
    @media (max-width: 576px) {
      ul li img {
        max-width: 95px;
      }
    }
  }
`;
