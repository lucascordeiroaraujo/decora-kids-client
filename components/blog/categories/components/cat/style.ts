import styled from 'styled-components';

export default styled.li`
  margin: 15px 10px;
  a {
    padding: 10px 30px;
    border-radius: 10px;
    font-size: calc(1.125rem + ((1vw - 2.5px) * 0.3593));
    transition: 0.5s;
    color: ${props => props.theme.colors.light};
    background: ${props => props.theme.colors.secondary};
    @media (min-width: 1920px) {
      font-size: 24px;
    }
  }
  &:hover a {
    color: ${props => props.theme.colors.secondary};
    background: ${props => props.theme.colors.primary};
  }
  &.active-cat a {
    background: ${props => props.theme.colors.info};
  }
`;
