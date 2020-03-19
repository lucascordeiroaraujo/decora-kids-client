import styled from 'styled-components';

export default styled.div`
  width: 100%;
  border: 5px solid ${props => props.theme.colors.secondary};
  border-radius: 10px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & > div {
    &:first-child {
      width: 40%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      flex-direction: column;
      address,
      div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        margin-bottom: 35px;
        span,
        a {
          font-size: calc(1.125rem + ((1vw - 2.5px) * 0.7186));
          color: ${props => props.theme.colors.secondary};
          text-align: right;
          @media (min-width: 1920px) {
            font-size: 30px;
          }
        }
        a:hover {
          text-decoration: underline;
        }
        img {
          max-width: 60px;
          margin-left: 25px;
          pointer-events: none;
        }
      }
    }
    &:last-child {
      width: 55%;
      height: 450px;
      border-radius: 0px 10px 10px 0px;
      overflow: hidden;
      div.map-pin {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
        font-size: 10px;
        line-height: 12px;
        background-color: ${props => props.theme.colors.primary};
      }
    }
  }
  @media (max-width: 992px) {
    flex-direction: column;
    padding: 20px;
    & > div:first-child,
    & > div:last-child {
      justify-content: center;
      width: 100%;
      address,
      div {
        justify-content: center;
        flex-direction: column;
        img {
          margin: 10px 0px 0px 0px;
        }
      }
    }
    & > div:last-child {
      border-radius: 0px 0px 10px 10px;
    }
  }
`;
