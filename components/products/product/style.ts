import styled from 'styled-components';

export default styled.article`
  width: 100%;
  max-height: 250px;
  padding: 0px 25px;
  & > div {
    width: 100%;
    height: 100%;
    max-height: 250px;
    border-radius: 20px;
    cursor: pointer;
    background-size: cover;
    background-color: ${props => props.theme.colors.secondary};
    img {
      width: 100%;
      height: auto;
      opacity: 0;
    }
  }
`;
