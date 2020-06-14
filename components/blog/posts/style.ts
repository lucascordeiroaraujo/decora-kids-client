import styled from 'styled-components';

export default styled.section`
  width: 100%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 2rem;
  article.blog-item {
    margin-bottom: 35px;
  }
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    grid-column-gap: 0px;
  }
`;
