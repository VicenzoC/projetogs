import { Link } from 'react-router';
import Container from '../components/Container';
import { getUsuarioAtual } from '../services/auth';

export default function Perfil() {
  const usuario = getUsuarioAtual();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <section className="py-20">
        <Container>
          <div className="max-w-xl mx-auto bg-white/90 rounded-2xl shadow-lg p-10">
            <h1 className="text-3xl md:text-4xl font-extrabold mb-6 text-[#0040a2] tracking-tight text-center">Meu Perfil</h1>
            {usuario ? (
              <div className="space-y-6">
                <div>
                  <span className="block text-gray-600 font-semibold mb-1">Nome:</span>
                  <span className="block text-lg text-[#0040a2] font-bold">{usuario.nome}</span>
                </div>
                <div>
                  <span className="block text-gray-600 font-semibold mb-1">Email:</span>
                  <span className="block text-lg text-[#0040a2] font-bold">{usuario.email}</span>
                </div>
              </div>
            ) : (
              <div className="text-center">
                <p className="text-gray-700 mb-4">Você precisa estar logado para ver seu perfil.</p>
                <Link to="/login" className="inline-block bg-[#0040a2] text-white font-bold px-8 py-3 rounded-xl shadow-lg hover:bg-[#00307a] transition-all duration-200 text-lg">
                  Fazer login
                </Link>
              </div>
            )}
          </div>
        </Container>
      </section>
    </div>
  );
} 