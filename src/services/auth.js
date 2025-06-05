export const login = (email, senha) => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  
  if (usuario) {
    localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
    return true;
  }
  return false;
};

export const cadastro = (nome, email, senha) => {
  const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
  
  if (usuarios.some(u => u.email === email)) {
    return false;
  }
  
  const novoUsuario = { id: Date.now(), nome, email, senha };
  usuarios.push(novoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  return true;
};

export const logout = () => {
  localStorage.removeItem('usuarioAtual');
};

export const getUsuarioAtual = () => {
  return JSON.parse(localStorage.getItem('usuarioAtual'));
};

export const isAutenticado = () => {
  return !!getUsuarioAtual();
}; 