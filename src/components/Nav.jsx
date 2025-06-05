import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getUsuarioAtual, logout } from '../services/auth';

function Navbar() {
  const [usuario, setUsuario] = useState(getUsuarioAtual());

  useEffect(() => {
    const checkUsuario = () => {
      setUsuario(getUsuarioAtual());
    };

    checkUsuario();

    window.addEventListener('storage', checkUsuario);

    return () => {
      window.removeEventListener('storage', checkUsuario);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setUsuario(null);
  };

  return (
    <nav className="bg-[#0040a2] shadow text-white sticky top-0 z-20">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-20 px-4">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="./src/assets/logo.jpg" 
            alt="Hydroguard" 
            className="h-10 w-auto"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className="px-4 py-2 rounded hover:bg-[#0055d4] transition text-white font-medium">
            Home
          </Link>
          {usuario ? (
            <>
              <Link to="/solucao" className="px-4 py-2 rounded hover:bg-[#0055d4] transition text-white font-medium">
                Solução
              </Link>
              <Link to="/sobre" className="px-4 py-2 rounded hover:bg-[#0055d4] transition text-white font-medium">
                Sobre
              </Link>
              <button 
                onClick={handleLogout}
                className="px-4 py-2 rounded hover:bg-[#0055d4] transition text-white font-medium"
              >
                Sair
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 rounded hover:bg-[#0055d4] transition text-white font-medium">
                Login
              </Link>
              <Link to="/cadastrar" className="px-4 py-2 rounded hover:bg-[#0055d4] transition text-white font-medium">
                Cadastrar
              </Link>
            </>
          )}
        </div>
        <div className="lg:hidden">
          <button 
            type="button"
            className="text-white hover:text-[#b3cfff] focus:outline-none"
            aria-label="Menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
