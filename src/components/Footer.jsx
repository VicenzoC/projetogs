import Container from './Container';

function Footer() {
  return (
    <footer className="bg-gray-100 py-6">
      <Container>
        <p className="text-center text-gray-600">
          <span className="inline-block mr-1">©</span> 
          {new Date().getFullYear()} Hydroguard - Todos os direitos reservados
        </p>
      </Container>
    </footer>
  );
}

export default Footer; 