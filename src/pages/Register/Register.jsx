import { Container } from '../../GlobalStyles.styled';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function Register() {
  return (
    <>
      <title>Registration</title>
      <Container>
        <RegisterForm />
      </Container>
    </>
  );
}
