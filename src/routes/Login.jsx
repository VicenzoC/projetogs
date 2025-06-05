import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Button from '../components/Button';
import Container from '../components/Container';
import { login } from '../services/auth';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    senha: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = login(formData.email, formData.senha);
      if (success) {
        window.dispatchEvent(new Event('storage'));
        navigate('/');
      } else {
        setError('Email ou senha inválidos');
      }
    } catch (error) {
      console.error('Erro no login:', error);
      setError('Ocorreu um erro ao fazer login. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Login</h1>
          <p className="text-gray-600">Entre com suas credenciais para acessar sua conta</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block font-medium text-primary mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
              required
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="senha" className="block font-medium text-primary mb-1">
              Senha
            </label>
            <input
              type="password"
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
              required
              disabled={loading}
            />
          </div>

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <Button 
            type="submit" 
            variant="primary" 
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </Button>

          <p className="text-center text-gray-600">
            Não tem uma conta?{' '}
            <Link to="/cadastrar" className="text-primary hover:text-primary-dark">
              Cadastre-se
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default Login;

