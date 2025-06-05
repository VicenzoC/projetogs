import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import Button from '../components/Button';
import Container from '../components/Container';
import { cadastrar } from '../services/auth';

function Cadastrar() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (formData.senha !== formData.confirmarSenha) {
      setError('As senhas não coincidem');
      return;
    }

    const success = cadastrar(formData.nome, formData.email, formData.senha);
    if (success) {
      navigate('/login');
    } else {
      setError('Este email já está cadastrado');
    }
  };

  return (
    <Container className="py-16">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Cadastro</h1>
          <p className="text-gray-600">Crie sua conta para acessar o Hydroguard</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="nome" className="block font-medium text-primary mb-1">
              Nome completo
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
              required
            />
          </div>

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
              minLength={6}
            />
          </div>

          <div>
            <label htmlFor="confirmarSenha" className="block font-medium text-primary mb-1">
              Confirmar senha
            </label>
            <input
              type="password"
              id="confirmarSenha"
              name="confirmarSenha"
              value={formData.confirmarSenha}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-primary focus:outline-none transition"
              required
              minLength={6}
            />
          </div>

          {error && <p className="text-red-600 text-sm mt-1">{error}</p>}

          <Button type="submit" variant="primary" className="w-full">
            Criar conta
          </Button>

          <p className="text-center text-gray-600">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-primary hover:text-primary-dark">
              Faça login
            </Link>
          </p>
        </form>
      </div>
    </Container>
  );
}

export default Cadastrar; 