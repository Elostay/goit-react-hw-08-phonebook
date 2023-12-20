import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledNavLink = styled(NavLink)`
  color: #333;
`;

export const AuthNavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 600px) {
    gap: 10px;
  }
`;
