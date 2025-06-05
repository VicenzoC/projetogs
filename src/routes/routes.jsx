import { createBrowserRouter } from "react-router";

import Home from "./Home"
import Login from "./Login"
import Cadastrar from "./Cadastrar"
import Sobre from "./Sobre"
import Solucao from "./Solucao"
import Error from "./Error"

const router = createBrowserRouter([
    { path: "/", Component: Home },
    { path: "/login", Component: Login },
    { path: "/cadastrar", Component: Cadastrar },
    { path: "/sobre", Component: Sobre },
    { path: "/solucao", Component: Solucao },
    { path: "*", Component: Error },
  ]);
  
  export default router