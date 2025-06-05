import { BeakerIcon, MapIcon, SignalIcon } from '@heroicons/react/24/outline';
import Button from '../components/Button';
import Container from '../components/Container';
import Icon from '../components/Icon';

function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <section className="relative w-full min-h-[480px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0040a2]/90 to-[#0055d4]/80 blur-2xl opacity-30 z-0" />
        <Container className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-16 py-16 md:py-24">
          <div className="flex-1 min-w-[280px] text-center md:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-[#0040a2] drop-shadow-xl tracking-tight">
              Hydroguard
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-10 drop-shadow-lg font-light max-w-lg mx-auto md:mx-0">
              Solução inteligente para monitoramento e prevenção de enchentes no Brasil
            </p>
            <a
              href="/solucao"
              className="inline-block bg-white/90 text-[#0040a2] font-bold px-8 py-4 rounded-xl border-2 border-[#0040a2] shadow-xl hover:bg-[#0040a2] hover:text-white hover:scale-105 transition-all duration-200 text-lg"
            >
              Conheça nossa solução
            </a>
          </div>
          <div className="flex-1 min-w-[280px] flex justify-center animate-fade-in">
            <div className="relative">
              <img 
                src="./src/assets/hero-image.png" 
                alt="Monitoramento de enchentes" 
                className="max-w-xs w-full rounded-3xl shadow-2xl border-4 border-white/40 bg-white/20 backdrop-blur-lg ring-4 ring-[#0040a2]/10 hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/80 px-6 py-2 rounded-full shadow-lg text-[#0040a2] font-semibold text-base backdrop-blur-md">
                Monitoramento em tempo real
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-[#0040a2] mb-3 tracking-tight">Como Funciona</h2>
            <p className="text-lg text-gray-600 font-light">Nossa tecnologia em três passos simples</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="group bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-200">
              <div className="bg-[#0040a2]/10 rounded-full p-4 mb-5">
                <Icon icon={BeakerIcon} size="lg" className="text-[#0040a2] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-[#0040a2] mb-2">Sensores Inteligentes</h3>
              <p className="text-gray-700 text-base text-center font-light">
                Sensores de pressão TLW136 instalados estrategicamente na base de postes para monitorar o nível da água em tempo real.
              </p>
            </div>
            <div className="group bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-200">
              <div className="bg-[#0040a2]/10 rounded-full p-4 mb-5">
                <Icon icon={SignalIcon} size="lg" className="text-[#0040a2] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-[#0040a2] mb-2">Comunicação IOT</h3>
              <p className="text-gray-700 text-base text-center font-light">
                Transmissão instantânea de dados através de tecnologia IOT, garantindo alertas rápidos e precisos.
              </p>
            </div>
            <div className="group bg-white/80 rounded-2xl shadow-lg p-8 flex flex-col items-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-200">
              <div className="bg-[#0040a2]/10 rounded-full p-4 mb-5">
                <Icon icon={MapIcon} size="lg" className="text-[#0040a2] group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold text-[#0040a2] mb-2">Mapeamento em Tempo Real</h3>
              <p className="text-gray-700 text-base text-center font-light">
                Sistema integrado que registra e mapeia pontos de alagamento, permitindo ações preventivas eficientes.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-t from-blue-100/60 to-white/0">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-[#0040a2] mb-3 tracking-tight">Benefícios</h2>
            <p className="text-lg text-gray-600 font-light">Por que escolher o Hydroguard?</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-[#0040a2]/10 rounded-full p-3 mb-3">
                <span className="text-2xl text-[#0040a2]">🛡️</span>
              </div>
              <h5 className="text-lg font-bold text-[#0040a2] mb-2">Prevenção Eficiente</h5>
              <p className="text-gray-700 text-base text-center font-light">Alertas antecipados permitem ações preventivas antes que as enchentes causem danos.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-[#0040a2]/10 rounded-full p-3 mb-3">
                <span className="text-2xl text-[#0040a2]">⏰</span>
              </div>
              <h5 className="text-lg font-bold text-[#0040a2] mb-2">Monitoramento 24/7</h5>
              <p className="text-gray-700 text-base text-center font-light">Sistema operacional 24 horas por dia, 7 dias por semana, garantindo segurança constante.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-[#0040a2]/10 rounded-full p-3 mb-3">
                <span className="text-2xl text-[#0040a2]">📊</span>
              </div>
              <h5 className="text-lg font-bold text-[#0040a2] mb-2">Dados Precisos</h5>
              <p className="text-gray-700 text-base text-center font-light">Informações em tempo real sobre níveis de água e pontos críticos de alagamento.</p>
            </div>
            <div className="bg-white/90 rounded-xl shadow-md p-6 flex flex-col items-center hover:shadow-xl transition">
              <div className="bg-[#0040a2]/10 rounded-full p-3 mb-3">
                <span className="text-2xl text-[#0040a2]">🔗</span>
              </div>
              <h5 className="text-lg font-bold text-[#0040a2] mb-2">Fácil Integração</h5>
              <p className="text-gray-700 text-base text-center font-light">Solução adaptável que pode ser implementada em qualquer região do Brasil.</p>
            </div>
          </div>

          <div className="text-center mt-14">
            <Button as="link" to="/sobre" variant="primary" size="lg" className="mr-4 shadow-lg hover:scale-105 transition-transform">
              Saiba mais sobre nós
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}

export default Home;
