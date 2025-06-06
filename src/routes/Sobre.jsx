import Container from '../components/Container';

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0040a2] tracking-tight">Sobre o Hydroguard</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light mb-8">
              O Hydroguard é um projeto dedicado à prevenção e monitoramento de enchentes no Brasil, utilizando tecnologia de ponta para salvar vidas e proteger comunidades.
            </p>
          </div>
          <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-lg p-10 mb-10">
            <h2 className="text-2xl font-bold text-[#0040a2] mb-4">Nossa Missão</h2>
            <p className="text-gray-700 text-lg mb-6">
              Desenvolver soluções inteligentes e acessíveis para monitoramento de enchentes, promovendo segurança, prevenção e bem-estar para toda a sociedade.
            </p>
            <h2 className="text-2xl font-bold text-[#0040a2] mb-4">Quem Somos</h2>
            <p className="text-gray-700 text-lg">
              Somos uma equipe multidisciplinar apaixonada por tecnologia, inovação e impacto social. Nosso objetivo é criar ferramentas que realmente façam a diferença na vida das pessoas.
            </p>
          </div>
          <div className="text-center mt-10">
            <a href="/" className="inline-block bg-[#0040a2] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:bg-[#00307a] transition-all duration-200 text-lg">
              Voltar para a Home
            </a>
          </div>
        </Container>
      </section>
    </div>
  );
}