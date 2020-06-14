import styled from 'styled-components';

export default styled.div`
  width: 100%;
  padding: 160px 0px;
  background: url(${require('~/public/images/bg-architect.jpg')}) center top
    no-repeat;
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 815px;
      height: 200px;
      border: 2px solid ${props => props.theme.colors.secondary};
      border-radius: 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      overflow: hidden;
      strong,
      p {
        font-size: calc(1.125rem + ((1vw - 2.5px) * 0.4192));
        line-height: calc(1.375rem + ((1vw - 2.5px) * 0.479));
        @media (min-width: 1920px) {
          font-size: 25px;
          line-height: 30px;
        }
      }
      strong {
        width: 260px;
        height: 100%;
        color: ${props => props.theme.colors.primary};
        background: ${props => props.theme.colors.secondary};
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0px 26px;
      }
      p {
        width: calc(100% - 260px);
        padding: 0px 50px;
        color: ${props => props.theme.colors.secondary};
      }
      @media (max-width: 992px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        strong,
        p {
          width: 100%;
          text-align: center;
        }
        strong {
          height: auto;
          justify-content: center;
          padding: 20px 40px;
        }
        p {
          padding: 30px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 80px 0px;
  }
`;
