import React from 'react';
import { Question } from '../types';
import { IMAGES } from '../constants';

interface QuestionScreenProps {
  question: Question;
  currentStep: number;
  totalSteps: number;
  selectedOption: string | undefined;
  onSelect: (value: string) => void;
  onNext: () => void;
  onBack: () => void;
  isSubmitting?: boolean;
}

const QuestionScreen: React.FC<QuestionScreenProps> = ({
  question,
  currentStep,
  totalSteps,
  selectedOption,
  onSelect,
  onNext,
  onBack,
  isSubmitting = false,
}) => {
  return (
    <div className="min-h-screen bg-background-light flex flex-col items-center relative overflow-hidden w-full max-w-md mx-auto">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none z-0"></div>
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0"></div>
      <div className="absolute top-20 -left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl z-0"></div>

      <div className="relative w-full h-full flex flex-col z-10 p-6 flex-grow">
        {/* Header */}
        <header className="flex justify-between items-center mb-6 pt-4">
          <button
            onClick={onBack}
            className="text-gray-700 hover:text-primary transition-colors p-2"
          >
            <span className="material-icons-round text-3xl">arrow_back</span>
          </button>

          <div className="flex flex-col items-center">
            <div className="flex gap-1 mt-1">
              {[...Array(totalSteps)].map((_, idx) => (
                <div
                  key={idx}
                  className={`w-8 h-1 rounded-full transition-colors duration-300 ${idx < currentStep ? 'bg-primary' : 'bg-beige'
                    }`}
                ></div>
              ))}
            </div>
          </div>

          <button className="text-gray-700 opacity-0 pointer-events-none">
            <span className="material-icons-round text-3xl">close</span>
          </button>
        </header>

        {/* Card Content */}
        <main className="flex-grow flex flex-col justify-center pb-8">
          <div className="bg-card-light shadow-xl rounded-2xl p-6 sm:p-8 relative border border-beige animate-fade-in-up">

            {/* Sticker */}
            <div className="absolute -top-4 -right-4 bg-white shadow-md transform rotate-6 px-3 py-1 border border-beige z-20 rounded-sm">
              <span className="font-handwriting text-2xl text-primary font-bold">riflettere</span>
            </div>

            {/* Profile Photo */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white shadow-lg">
                <img src="/ana-profile.jpg" alt="Ana Flávia" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Question Text */}
            <h1 className="font-display font-bold text-xl sm:text-2xl text-center mb-8 leading-snug text-gray-800">
              {question.title}
            </h1>

            {/* Options */}
            <div className="space-y-4">
              {question.options.map((option) => {
                const isSelected = selectedOption === option.value;
                return (
                  <label
                    key={option.id}
                    className={`group relative flex items-center p-4 rounded-xl border-2 cursor-pointer transition-all active:scale-95 ${isSelected
                      ? 'border-primary bg-primary/10 shadow-md'
                      : 'border-transparent bg-white shadow-sm hover:border-secondary/30'
                      }`}
                    onClick={() => onSelect(option.value)}
                  >
                    <input
                      type="radio"
                      name={`q-${question.id}`}
                      value={option.value}
                      checked={isSelected}
                      onChange={() => { }}
                      className="sr-only"
                    />

                    <div className={`w-6 h-6 rounded-full border-2 mr-4 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'border-primary bg-primary' : 'border-gray-300'
                      }`}>
                      {isSelected && (
                        <span className="material-icons-round text-white text-sm">check</span>
                      )}
                    </div>

                    <span className={`text-base sm:text-lg font-medium transition-colors ${isSelected ? 'text-primary font-bold' : 'text-gray-700 group-hover:text-secondary'
                      }`}>
                      {option.label}
                    </span>
                  </label>
                );
              })}
            </div>

            {/* Decor Elements */}
            <div className="absolute -bottom-6 -left-4 w-16 opacity-80 pointer-events-none transform -rotate-12">
              <svg fill="none" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" fill="#F5841A" fillOpacity="0.1" r="45"></circle>
                <circle cx="50" cy="50" r="35" stroke="#F5841A" strokeWidth="2"></circle>
                <path d="M50 15V85" stroke="#F5841A" strokeWidth="2"></path>
                <path d="M15 50H85" stroke="#F5841A" strokeWidth="2"></path>
              </svg>
            </div>
          </div>

          {/* Motivational */}
          <div className="mt-8 text-center relative">
            <img
              alt="arrow doodle"
              className="absolute -top-6 right-8 w-12 opacity-80"
              src={IMAGES.arrowDoodle}
              style={{ transform: 'rotate(45deg)' }}
            />
            <p className="font-handwriting text-3xl text-secondary transform -rotate-2">
              Seja sincero com você!
            </p>
          </div>
        </main>

        {/* Footer */}
        <footer className="mt-auto mb-4">
          <button
            onClick={onNext}
            disabled={!selectedOption || isSubmitting}
            className={`w-full font-display font-bold py-4 px-6 rounded-xl shadow-lg flex items-center justify-center gap-2 group transition-all duration-300 ${selectedOption && !isSubmitting
              ? 'bg-secondary text-white shadow-secondary/30 hover:opacity-90'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
          >
            {isSubmitting ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Enviando...
              </>
            ) : (
              <>
                {currentStep === totalSteps ? 'Ver Resultado' : 'Próxima Pergunta'}
                <span className="material-icons-round group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </>
            )}
          </button>
        </footer>
      </div>
    </div>
  );
};

export default QuestionScreen;