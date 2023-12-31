import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';
import { Button, TextField } from '@mui/material';
import { Form } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        color="secondary"
        id="standard-basic"
        label="Email"
        variant="outlined"
        type="email"
        name="email"
      />
      <TextField
        color="secondary"
        id="standard-basic"
        label="Password"
        variant="outlined"
        type="password"
        name="password"
      />
      <Button variant="outlined" color="secondary" type="submit">
        Log In
      </Button>
    </Form>
  );
};
