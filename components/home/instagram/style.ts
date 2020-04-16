import styled from 'styled-components';

export default styled.div`
  width: 100%;
  div.container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      img {
        width: 18%;
        height: auto;
        margin-bottom: 20px;
        border-radius: 15px;
        &:last-child {
          display: none;
        }
        @media (max-width: 992px) {
          width: 32%;
          &:last-child {
            display: block;
          }
        }
        @media (max-width: 992px) {
          width: 48%;
        }
      }
    }
  }
`;
