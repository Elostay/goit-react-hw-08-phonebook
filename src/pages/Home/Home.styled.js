import styled from '@emotion/styled';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 50px;
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

export const Title = styled.h1``;
export const Smile = styled.h2``;
