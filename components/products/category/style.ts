import styled from 'styled-components';

export default styled.section`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: relative;
  margin-bottom: 50px;
  div.category-title {
    width: 250px;
    height: calc(100% - 17px);
    position: absolute;
    top: 0px;
    left: 0px;
    border-radius: 20px;
    border: 8px solid ${props => props.theme.colors.secondary};
    div {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 15px;
      position: absolute;
      top: 0px;
      left: 0px;
      border-radius: 15px;
      transition: 0.5s;
      background-color: ${props => props.theme.colors.light};
      span {
        text-align: center;
        font-size: calc(1.25rem + ((1vw - 2.5px) * 0.5988));
        word-break: break-all;
        color: ${props => props.theme.colors.secondary};
        @media (min-width: 1920px) {
          font-size: 30px;
        }
      }
    }
    &:before {
      content: '';
      position: absolute;
      z-index: -1;
      width: 100%;
      height: calc(100% - 6px);
      margin: 15px 0px 0px -22px;
      border-radius: 20px;
      transition: 0.5s;
      border: 8px solid ${props => props.theme.colors.secondary};
    }
  }
  div.react-multi-carousel {
    width: calc(100% - 275px);
    button.react-multiple-carousel__arrow--left,
    button.react-multiple-carousel__arrow--right {
      background: transparent;
      &:before {
        font-size: 40px;
        color: ${props => props.theme.colors.secondary};
      }
    }
    button.react-multiple-carousel__arrow--left {
      left: -12px;
    }
    button.react-multiple-carousel__arrow--right {
      right: -12px;
    }
  }
  @media (max-width: 992px) {
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div.category-title {
      position: relative;
      margin-bottom: 30px;
      width: 100%;
      height: auto;
      border-width: 4px;
      border-radius: 10px;
      div {
        position: relative;
      }
      &:before {
        display: none;
      }
    }
    div.react-multi-carousel {
      width: 100%;
      li.react-multi-carousel-item--active {
        article {
          padding: 0px 15px;
        }
        &:first-child article {
          padding-left: 0px;
        }
        &:nth-child(2) article {
          padding-right: 0px;
        }
      }
    }
  }
`;
