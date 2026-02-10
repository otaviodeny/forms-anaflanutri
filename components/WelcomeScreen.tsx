import React from 'react';
import { IMAGES } from '../constants';

interface WelcomeScreenProps {
  onStart: () => void;
}

const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden w-full max-w-md mx-auto">
      {/* Background Texture */}
      <div className="fixed inset-0 opacity-30 pointer-events-none bg-grid-pattern z-0"></div>

      {/* Header */}
      <header className="relative z-10 px-6 pt-8 pb-4 flex justify-center items-center w-full">
        <div className="flex items-center space-x-3">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-primary/30 shadow-sm">
            <img src="/ana-profile.jpg" alt="Ana Flávia" className="w-full h-full object-cover" />
          </div>
          <span className="font-sans font-bold text-sm tracking-wide text-secondary">@anafla.nutri</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-grow flex flex-col px-6 w-full pb-8">
        {/* Image Card */}
        <div className="relative w-full aspect-[4/3] mt-4 mb-8 rounded-t-[3rem] rounded-b-[1rem] overflow-hidden shadow-xl shadow-orange-100/50 group">
          <img
            alt="Ana Flávia"
            className="w-full h-full object-cover transform transition duration-700 group-hover:scale-105"
            src="/ana-hero.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-lg flex items-center space-x-1 border border-white/50">
            <span className="material-icons-round text-primary text-sm">science</span>
            <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Pesquisa Acadêmica</span>
          </div>
        </div>

        {/* Titles */}
        <div className="text-center mb-6 space-y-2 relative">
          <span className="material-icons-round absolute -top-8 -right-4 text-8xl text-green-100 rotate-45 -z-10">eco</span>
          <h1 className="font-display text-4xl leading-tight text-gray-900 font-medium">
            Mapeamento de <br />
            <span className="font-script text-5xl text-primary block mt-2 transform -rotate-2 relative inline-block">
              Comportamento Alimentar
            </span>
          </h1>
          <p className="font-display text-xl text-secondary mt-2">
            & Educação sobre Fome Emocional
          </p>
        </div>

        {/* Badges */}
        <div className="flex justify-center gap-3 mb-8 flex-wrap">
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-700">
            <span className="material-icons-round text-sm">visibility_off</span>
            <span className="text-xs font-bold uppercase tracking-wide">Anônimo</span>
          </div>
          <div className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700">
            <span className="material-icons-round text-sm">timer</span>
            <span className="text-xs font-bold uppercase tracking-wide">30 Segundos</span>
          </div>
        </div>

        {/* Description Box */}
        <div className="bg-card-light p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 relative overflow-hidden">
          <div className="absolute -top-6 -left-6 w-16 h-16 bg-primary/10 rounded-full blur-xl"></div>
          <p className="text-gray-600 text-sm leading-relaxed text-center">
            Este questionário faz parte de uma pesquisa acadêmica sobre <strong className="text-secondary">comportamento alimentar e fome emocional</strong>. Suas respostas são anônimas e contribuem para o estudo científico da relação entre emoções e alimentação.
          </p>
        </div>

        {/* Action Button */}
        <div className="mt-auto space-y-4">
          <button
            onClick={onStart}
            className="w-full bg-primary hover:bg-orange-600 active:scale-95 transition-all duration-300 text-white font-sans font-bold py-4 px-6 rounded-xl shadow-lg shadow-orange-500/30 flex items-center justify-center space-x-2 group"
          >
            <span className="text-lg">Começar Jornada</span>
            <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
          <p className="text-center text-xs text-gray-400">
            Seus dados são utilizados apenas para fins científicos.
          </p>
        </div>
      </main>

      {/* Decorative Blobs */}
      <div className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden z-0">
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-soft-blue/20 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-16 -right-10 w-48 h-48 bg-accent-peach/30 rounded-full blur-2xl"></div>
      </div>
    </div>
  );
};

export default WelcomeScreen;