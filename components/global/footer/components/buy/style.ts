import styled from 'styled-components';

export default styled.div`
  width: 100%;
  padding: 40px 0px;
  margin-top: 100px;
  background-color: ${props => props.theme.colors.primary};
  div.container {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    strong {
      font-size: calc(1.875rem + ((1vw - 2.5px) * 1.7964));
      color: ${props => props.theme.colors.secondary};
      margin-right: 60px;
      @media (min-width: 1920px) {
        font-size: 60px;
      }
    }
    a {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      position: relative;
      padding-right: 3%;
      span,
      svg {
        transition: 0.5s;
      }
      span {
        font-size: calc(1.125rem + ((1vw - 2.5px) * 0.7186));
        color: ${props => props.theme.colors.secondary};
        text-align: right;
        margin-right: 45px;
        @media (min-width: 1920px) {
          font-size: 30px;
        }
      }
      svg {
        fill: ${props => props.theme.colors.secondary};
        width: auto;
        height: 90%;
        position: absolute;
        right: 0px;
      }
      &:hover {
        span {
          color: ${props => props.theme.colors.info};
        }
        svg {
          fill: ${props => props.theme.colors.info};
        }
      }
    }
    @media (max-width: 992px) {
      flex-direction: column;
      strong {
        margin: 0px 0px 30px 0px;
      }
    }
  }
`;
