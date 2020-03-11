import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video{
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section{
    display: block;
  }
  body{
    overflow-x: hidden;
    transition: 0.5s;
    height: 5000px;
  }
  ol, ul{
    list-style: none;
    padding: 0px;
  }
  a{
    text-decoration: none;
  }
  button{
    outline: none !important;
  }
  blockquote, q{
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after{
    content: '';
    content: none;
  }
  table{
    border-collapse: collapse;
    border-spacing: 0;
  }
  @font-face{
    font-family: 'ComfortaaBold';
    src: url(${require('../fonts/ComfortaaBold/ComfortaaBold.woff')}) format('woff'),
      url(${require('../fonts/ComfortaaBold/ComfortaaBold.woff2')}) format('woff2'),
      url(${require('../fonts/ComfortaaBold/ComfortaaBold.svg')}) format('svg');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  body, input, select, textarea{
    font-family: 'ComfortaaBold';
    outline: none;
  }
  /*
    ## Formula font-size calculator

    font-size: calc([minimum size] + ([maximum size] - [minimum size]) * ((100vw - [minimum viewport width]) / ([maximum viewport width] - [minimum viewport width])));

    Ex: font-size: calc(50px + (100 - 50) * ((100vw - 250px) / (1920 - 250)));

    @media (min-width: 1920px) {
      font-size: 50px;
    }
  */
  #nprogress{
		pointer-events: none;
		.bar{
			position: fixed;
			z-index: 1031;
			top: 0;
			left: 0;
			width: 100%;
			height: 5px;
			background: ${props => props.theme.colors.info};
		}
	}
  .react-reveal{
		opacity: 0;
	}
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0px auto;
  position: relative;
  padding: 0px 15px;
`;
