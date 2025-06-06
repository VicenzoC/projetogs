import { BeakerIcon, MapIcon, SignalIcon } from '@heroicons/react/24/outline';
import Container from '../components/Container';
import Icon from '../components/Icon';

export default function Solucao() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <section className="py-20">
        <Container>
          <div className="text-center mb-14">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-[#0040a2] tracking-tight">Nossa Solução</h1>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto font-light mb-8">
              Conheça como o Hydroguard utiliza sensores inteligentes, comunicação IoT e mapeamento em tempo real para prevenir enchentes e proteger comunidades.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <div className="bg-[#0040a2]/10 rounded-full p-4 mb-5">
                <Icon icon={BeakerIcon} size="lg" className="text-[#0040a2]" />
              </div>
              <h3 className="text-xl font-bold text-[#0040a2] mb-2">Sensores Inteligentes</h3>
              <p className="text-gray-700 text-base text-center font-light">
                Sensores de pressão TLW136 instalados estrategicamente para monitorar o nível da água em tempo real, com alta precisão e confiabilidade.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <div className="bg-[#0040a2]/10 rounded-full p-4 mb-5">
                <Icon icon={SignalIcon} size="lg" className="text-[#0040a2]" />
              </div>
              <h3 className="text-xl font-bold text-[#0040a2] mb-2">Comunicação IoT</h3>
              <p className="text-gray-700 text-base text-center font-light">
                Transmissão instantânea dos dados coletados via tecnologia IoT, permitindo alertas rápidos e ações preventivas eficientes.
              </p>
            </div>
            <div className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col items-center">
              <div className="bg-[#0040a2]/10 rounded-full p-4 mb-5">
                <Icon icon={MapIcon} size="lg" className="text-[#0040a2]" />
              </div>
              <h3 className="text-xl font-bold text-[#0040a2] mb-2">Mapeamento em Tempo Real</h3>
              <p className="text-gray-700 text-base text-center font-light">
                Sistema integrado que registra e mapeia pontos de alagamento, facilitando a tomada de decisão e a prevenção de desastres.
              </p>
            </div>
          </div>
          <div className="max-w-3xl mx-auto bg-white/90 rounded-2xl shadow-lg p-10 mb-10">
            <h2 className="text-2xl font-bold text-[#0040a2] mb-4">Diferenciais</h2>
            <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
              <li>Monitoramento 24/7 com dados em tempo real</li>
              <li>Alertas automáticos e precisos para autoridades e população</li>
              <li>Fácil integração com sistemas públicos e privados</li>
              <li>Plataforma intuitiva e acessível</li>
            </ul>
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