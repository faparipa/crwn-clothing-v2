import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;
// .category-preview-container {
//   display: flex;
//   flex-direction: column;
//   margin-bottom: 30px;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;
`;

// .title { //ez egy link
//   font-size: 28px;
//   margin-bottom: 25px;
//   cursor: pointer;
// }

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

//   .preview {
//     display: grid;
//     grid-template-columns: repeat(4, 1fr);
//     column-gap: 20px;
//   }
// }
