import { HomeContainer, Smile, Title } from './Home.styled';
import { Container } from '../../GlobalStyles.styled';

export default function Home() {
  return (
    <>
      <Container>
        <HomeContainer>
          <Title>Hello, glad to see you! </Title>
          <Smile>&#128522;</Smile>
        </HomeContainer>
      </Container>
    </>
  );
}
