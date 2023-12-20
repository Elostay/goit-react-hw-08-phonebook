import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { Button, TextField } from '@mui/material';
import { Form } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
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
        label="Username"
        variant="outlined"
        type="text"
        name="name"
      />
      {/* <input type="text" name="name" /> */}
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
        Register
      </Button>
    </Form>
  );
};
