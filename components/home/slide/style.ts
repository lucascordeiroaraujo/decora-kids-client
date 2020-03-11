import styled from 'styled-components';

export default styled.div`
  width: 100%;
  div {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      &.mobile {
        display: none;
      }
      @media (max-width: 992px) {
        &.desktop {
          display: none;
        }
        &.mobile {
          display: block;
        }
      }
    }
  }
`;
