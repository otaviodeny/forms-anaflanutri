import React from 'react';
import { IMAGES } from '../constants';

const ResultsScreen: React.FC = () => {
  return (
    <div className="bg-background-light font-sans antialiased transition-colors duration-300 min-h-screen w-full max-w-md mx-auto relative overflow-hidden">
      {/* Background Texture */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none bg-grid-pattern z-0"
      ></div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-background-light/90 border-b border-gray-200 px-6 py-4 flex justify-center items-center">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm">
            <img src="/ana-profile.jpg" alt="Ana Flávia" className="w-full h-full object-cover" />
          </div>
          <span className="font-sans font-bold text-sm tracking-wide text-secondary">@anafla.nutri</span>
        </div>
      </nav>

      {/* Main Content */}
      <main className="px-6 pt-8 pb-12 relative z-10">

        {/* Header Section */}
        <header className="mb-12 text-center animate-fade-in-up">
          <h1 className="font-display text-[2.5rem] leading-[1.1] text-secondary font-bold mb-4">
            Obrigada! Sua resposta é muito <span className="relative inline-block text-primary">
              importante
              <span className="absolute left-0 bottom-0 w-full h-2 bg-accent-peach/50 -z-10 transform -rotate-1"></span>
            </span> 🧡
          </h1>
        </header>

        {/* Article */}
        <article className="space-y-12">

          {/* Section 1: Biochemistry */}
          <section className="space-y-6">
            <h2 className="font-display text-2xl text-secondary font-semibold italic">Bioquímica do Desejo</h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              <span className="float-left font-display text-5xl leading-[0.8] pr-2 text-secondary font-bold">V</span>
              ocê sabia que a sua vontade de comer não é aleatória? Ela segue uma lógica Bioquímica.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              Quando o <strong>cortisol</strong> (hormônio do estresse) sobe, ele bloqueia nossa área racional e ativa o sistema de recompensa. O cérebro não quer comida, ele quer alívio imediato.
            </p>
            <div className="bg-white/50 p-6 rounded-2xl border-l-4 border-primary italic text-secondary text-lg shadow-sm">
              "Mas como saber se é o Cortisol falando ou se é Fome real?"
            </div>
          </section>

          {/* Section 2: Apple Test */}
          <section className="bg-secondary rounded-[2.5rem] p-8 shadow-2xl text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
              <span className="material-icons-round text-[8rem]">nutrition</span>
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-3xl font-bold mb-2">FAÇA O "TESTE DA MAÇÃ"</h2>
              <p className="text-white/80 mb-8 font-light italic">Antes de comer, pergunte-se: "Eu comeria uma maçã ou um ovo cozido agora?"</p>

              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center gap-5">
                  <div className="w-14 h-14 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="material-icons-round text-white text-3xl">check_circle</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1 italic">SIM?</h3>
                    <p className="text-sm text-white/90">Fome Física. Seu corpo precisa de nutrientes. Pode comer!</p>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 flex items-center gap-5">
                  <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                    <span className="material-icons-round text-white text-3xl">cancel</span>
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-xl mb-1 italic">NÃO?</h3>
                    <p className="text-sm text-white/90">Só serve se for aquele chocolate ou salgado específico? Então é <strong>Fome Emocional</strong>. Seu cérebro busca recompensa, não comida.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Strategies */}
          <section className="space-y-8">
            <div className="text-center space-y-2">
              <h2 className="font-display text-2xl font-bold text-secondary uppercase tracking-widest">DEU FOME EMOCIONAL?</h2>
              <p className="text-primary font-bold text-xl">HACKEIE O SEU CORPO</p>
              <div className="w-12 h-1 bg-accent-peach mx-auto my-4"></div>
              <p className="text-gray-500 text-sm italic">Não adianta comer, a vontade vai voltar! Tente estas 5 estratégias:</p>
            </div>

            <div className="grid gap-6">
              {[
                { icon: 'intestine', color: 'text-primary', bg: 'bg-accent-peach/20', title: '1. CUIDE DO INTESTINO (Sua fábrica de humor)', desc: '90% da sua Serotonina é produzida no intestino! Coma fibras (frutas, verduras, aveia). O intestino preso ou inflamado aumenta a irritabilidade e a busca por compensação na comida.' },
                { icon: 'egg_alt', color: 'text-blue-500', bg: 'bg-blue-50', title: '2. PROTEÍNA', desc: 'Proteína na dieta, certos aminoácidos e até mesmo alguns tipos de gordura podem ajudar a aumentar a saciedade.' },
                { icon: 'water_drop', color: 'text-cyan-500', bg: 'bg-cyan-50', title: '3. HIDRATAÇÃO', desc: 'Beba um copo d\'água devagar. A desidratação aumenta o cortisol e a ansiedade.' },
                { icon: 'bedtime', color: 'text-purple-500', bg: 'bg-purple-50', title: '4. MANTER REGULARIDADE DO SONO', desc: 'Dada a forte conexão entre a privação de sono e o aumento dos hormônios da fome, é essencial priorizar um sono de qualidade (geralmente 7-8 horas para a maioria dos adultos).' },
                { icon: 'music_note', color: 'text-primary', bg: 'bg-orange-50', title: '5. MUDE O FOCO', desc: 'Saia do ambiente por 5 minutos ou coloque uma música. Quebre o ciclo do pensamento obsessivo.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-6 rounded-3xl shadow-sm border border-accent-peach/20 flex gap-5 items-start">
                  <div className={`${item.bg} p-4 rounded-2xl ${item.color} flex-shrink-0`}>
                    {item.icon === 'intestine' ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" className="w-8 h-8" fill="currentColor">
                        <path d="M32 4c-3.3 0-6 2.7-6 6v6c0 2.2-1.8 4-4 4s-4-1.8-4-4v-2c0-3.3-2.7-6-6-6s-6 2.7-6 6v10c0 5.5 4.5 10 10 10h2c2.2 0 4 1.8 4 4s-1.8 4-4 4h-2c-3.3 0-6 2.7-6 6s2.7 6 6 6h4c5.5 0 10-4.5 10-10v-2c0-2.2 1.8-4 4-4s4 1.8 4 4v2c0 5.5 4.5 10 10 10h4c3.3 0 6-2.7 6-6s-2.7-6-6-6h-2c-2.2 0-4-1.8-4-4s1.8-4 4-4h2c5.5 0 10-4.5 10-10V14c0-3.3-2.7-6-6-6s-6 2.7-6 6v2c0 2.2-1.8 4-4 4s-4-1.8-4-4v-6c0-3.3-2.7-6-6-6z" />
                      </svg>
                    ) : (
                      <span className="material-icons-round text-3xl">{item.icon}</span>
                    )}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-lg text-secondary">{item.title}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed mt-2 italic">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center py-4">
              <p className="font-script text-secondary text-3xl">Aprenda a ouvir o que seu corpo realmente pede!</p>
            </div>
          </section>

          {/* Profile Section */}
          <section className="bg-accent-peach/10 rounded-[2.5rem] p-10 border-2 border-dashed border-accent-peach/40 relative overflow-hidden">
            <div className="flex flex-col items-center gap-6 text-center">
              <div className="relative">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    alt="Ana Flávia"
                    className="w-full h-full object-cover"
                    src="/ana-profile.jpg"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-secondary text-white p-2 rounded-full shadow-lg">
                  <span className="material-icons-round text-sm">verified</span>
                </div>
              </div>

              <div>
                <h3 className="font-display text-3xl font-bold text-secondary mb-2 italic">Ana Flávia</h3>
                <p className="text-primary font-bold text-xs uppercase tracking-[0.2em] mb-4">Acadêmica de Nutrição</p>
                <p className="font-script text-2xl text-gray-600 leading-tight">
                  "A sua saúde começa no equilíbrio entre o que o corpo precisa e o que a mente deseja."
                </p>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="mt-8 pt-8 border-t border-gray-200">
            <h5 className="font-display text-xs uppercase tracking-[0.2em] text-gray-400 mb-6 flex items-center gap-2">
              <span className="material-icons-round text-lg">library_books</span> Referências Acadêmicas
            </h5>
            <ul className="space-y-4 text-[11px] leading-relaxed text-gray-500 font-medium uppercase tracking-tight">
              <li><strong className="text-secondary">HARVARD HEALTH PUBLISHING.</strong> Why stress causes people to overeat. Harvard Medical School, 2021.</li>
              <li><strong className="text-secondary">YANO, J. M. et al.</strong> Indigenous bacteria from the gut microbiota regulate host serotonin biosynthesis. Caltech / Cell, 2015.</li>
              <li><strong className="text-secondary">MAYO CLINIC.</strong> Weight loss: Gain control of emotional eating. Mayo Foundation for Medical Education and Research.</li>
            </ul>

            <div className="mt-12 text-center pb-6">
              <p className="font-display text-gray-300 text-[10px] tracking-widest italic">Ana Flávia Nutrição © 2026</p>
            </div>
          </footer>
        </article>
      </main>
    </div>
  );
};

export default ResultsScreen;