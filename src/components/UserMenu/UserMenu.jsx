import { useAuth } from 'hooks/useAuth';
import { useDispatch } from 'react-redux';
import { logOut } from '../../redux/auth/operations';
import { Welcome } from './UserMenu.styled';
import { Button } from '@mui/material';
import { UserMenuContainer } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  return (
    <UserMenuContainer>
      <Welcome>Welcome, {user.name}</Welcome>
      <Button
        variant="outlined"
        color="secondary"
        type="button"
        onClick={() => dispatch(logOut())}
      >
        Logout
      </Button>
    </UserMenuContainer>
  );
};
