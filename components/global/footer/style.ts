import styled from 'styled-components';

export default styled.footer`
  width: 100%;
  height: 300px;
  margin-top: 100px;
  background-color: ${props => props.theme.colors.secondary};
  div.container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    div {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      flex-direction: column;
      address,
      a {
        font-size: 23px;
        color: ${props => props.theme.colors.primary};
        font-style: normal;
        text-align: right;
        margin-bottom: 25px;
      }
      a {
        margin-bottom: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        svg {
          width: 18px;
          height: 18px;
          margin-right: 10px;
          fill: ${props => props.theme.colors.primary};
        }
      }
    }
  }
`;
