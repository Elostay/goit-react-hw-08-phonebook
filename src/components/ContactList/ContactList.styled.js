import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 40px;
  max-width: 700px;
  margin: 0 auto;
`;
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #f7e5d5;
  font-weight: 700;
  font-size: 20px;
`;
export const Button = styled.button`
  width: 160px;
  background-color: #e68932;
  padding: 15px;
  border-radius: 30px;
  color: #f7e5d5;
  font-weight: 700;
  font-size: 20px;
`;
export const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Number = styled.p`
  font-size: 30px;
`;
