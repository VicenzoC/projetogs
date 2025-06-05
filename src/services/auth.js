export const login = (email, senha) => {
  try {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    const usuario = usuarios.find(u => u.email === email && u.senha === senha);
    
    if (usuario) {
      const { senha: _, ...usuarioSemSenha } = usuario;
      localStorage.setItem('usuarioAtual', JSON.stringify(usuarioSemSenha));
      return true;
    }
    return false;
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return false;
  }
};

export const cadastrar = (nome, email, senha) => {
  try {
    const usuarios = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    if (usuarios.some(u => u.email === email)) {
      return false;
    }
    
    const novoUsuario = {
      id: Date.now(),
      nome,
      email,
      senha
    };
    
    usuarios.push(novoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    return true;
  } catch (error) {
    console.error('Erro ao cadastrar:', error);
    return false;
  }
};

export const logout = () => {
  try {
    localStorage.removeItem('usuarioAtual');
    return true;
  } catch (error) {
    console.error('Erro ao fazer logout:', error);
    return false;
  }
};

export const getUsuarioAtual = () => {
  try {
    return JSON.parse(localStorage.getItem('usuarioAtual'));
  } catch (error) {
    console.error('Erro ao obter usuário atual:', error);
    return null;
  }
};

export const isAutenticado = () => {
  return !!getUsuarioAtual();
}; 