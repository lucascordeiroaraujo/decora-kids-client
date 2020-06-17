import styled from 'styled-components';

export default styled.div`
  width: 100%;
  li {
    a {
      position: absolute;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
    }
    img {
      width: 100%;
      height: auto;
      pointer-events: none;
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
