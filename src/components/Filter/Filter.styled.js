import styled from '@emotion/styled';

export const FilterContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 20px;
  background-color: rgba(235, 200, 153, 0);
  @media (max-width: 1101px) {
    font-size: 40px;
  }
  @media (max-width: 900px) {
    font-size: 30px;
  }
  @media (max-width: 680px) {
    font-size: 20px;
  }
`;
