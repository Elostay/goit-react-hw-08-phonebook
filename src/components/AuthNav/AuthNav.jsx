import { AuthNavContainer, StyledNavLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthNavContainer>
      <StyledNavLink to="/register">Register</StyledNavLink>
      <StyledNavLink to="/login">Log In</StyledNavLink>
    </AuthNavContainer>
  );
};
