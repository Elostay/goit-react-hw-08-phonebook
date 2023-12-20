import styled from '@emotion/styled';

export const ListContainer = styled.ul`
  margin-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
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

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 40px;
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

export const Info = styled.div`
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
