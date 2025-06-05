import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Container>
        <p className="mb-0 text-center">
          <i className="bi bi-c-circle me-1"></i> {new Date().getFullYear()} Hydroguard - Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer; 