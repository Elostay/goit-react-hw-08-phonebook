import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const Welcome = styled.div`
  background-color: rgba(235, 200, 153, 0);
  @media (max-width: 550px) {
    display: none;
  }
`;
