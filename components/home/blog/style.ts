import styled from 'styled-components';

export default styled.section`
  width: 100%;
  padding: 110px 0px;
  margin-bottom: 150px;
  background: ${props => props.theme.colors.primary};
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    & > div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }
    & > a {
      padding: 10px 20px;
      border-radius: 10px;
      font-size: calc(1.25rem + ((1vw - 2.5px) * 0.5988));
      @media (min-width: 1920px) {
        font-size: 30px;
      }
      color: ${props => props.theme.colors.primary};
      text-align: center;
      margin-top: 50px;
      text-transform: lowercase;
      transition: 0.5s;
      border: 3px solid ${props => props.theme.colors.secondary};
      background-color: ${props => props.theme.colors.secondary};
      &:hover {
        color: ${props => props.theme.colors.secondary};
        background-color: transparent;
      }
    }
  }
  @media (max-width: 992px) {
    padding: 55px 0px;
    margin-bottom: 75px;
  }
`;
