import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { AppBarContainer } from './AppBar.styled';
import { Container } from '../Container.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Container>
        <AppBarContainer>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </AppBarContainer>
      </Container>
    </header>
  );
};
