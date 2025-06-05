import { createBrowserRouter } from 'react-router';
import Layout from '../components/Layout';
import Cadastrar from './Cadastrar';
import Error from './Error';
import Home from './Home';
import Login from './Login';
import Perfil from './Perfil';
import Sobre from './Sobre';
import Solucao from './Solucao';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'cadastrar',
        element: <Cadastrar />
      },
      {
        path: 'solucao',
        element: <Solucao />
      },
      {
        path: 'sobre',
        element: <Sobre />
      },
      {
        path: 'perfil',
        element: <Perfil />
      }
    ]
  }
]);

export default router;