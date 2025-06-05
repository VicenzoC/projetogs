import { Link } from "react-router";
import Nav from "../components/Nav";

export default function Error() {

  return (
    <div>
      <Nav />
      <div>Ocorreu um erro</div>
      <Link to="/" className="border border-black px-2 m-1 rounded bg-gray-300">
        Voltar para a página inicial
      </Link>
      <Footer />
    </div>
  )
}