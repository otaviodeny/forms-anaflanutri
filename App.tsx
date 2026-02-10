import React, { useState } from 'react';
import WelcomeScreen from './components/WelcomeScreen';
import QuestionScreen from './components/QuestionScreen';
import ResultsScreen from './components/ResultsScreen';
import { QUESTIONS } from './constants';
import { SurveyState } from './types';
import { supabase } from './supabaseClient';

const App: React.FC = () => {
  const [surveyState, setSurveyState] = useState<SurveyState>({
    currentStep: 0,
    answers: {},
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleStart = () => {
    setSurveyState((prev) => ({ ...prev, currentStep: 1 }));
    window.scrollTo(0, 0);
  };

  const handleAnswerSelect = (value: string) => {
    setSurveyState((prev) => ({
      ...prev,
      answers: { ...prev.answers, [prev.currentStep]: value },
    }));
  };

  const submitToSupabase = async (answers: Record<number, string>) => {
    // Map answer values to the readable option labels
    const getLabel = (questionId: number, value: string): string => {
      const question = QUESTIONS.find(q => q.id === questionId);
      const option = question?.options.find(o => o.value === value);
      return option?.label || value;
    };

    const { error } = await supabase.from('survey_responses').insert({
      faixa_etaria: getLabel(1, answers[1]),
      apetite_estresse: getLabel(2, answers[2]),
      frequencia_sem_fome: getLabel(3, answers[3]),
      sentimento_pos_impulso: getLabel(4, answers[4]),
      diferencia_fome: getLabel(5, answers[5]),
    });

    if (error) {
      console.error('Erro ao salvar resposta:', error);
    }
  };

  const handleNext = async () => {
    const nextStep = surveyState.currentStep + 1;

    // If moving past the last question, submit to Supabase
    if (nextStep > QUESTIONS.length) {
      setIsSubmitting(true);
      await submitToSupabase(surveyState.answers);
      setIsSubmitting(false);
    }

    setSurveyState((prev) => ({ ...prev, currentStep: nextStep }));
    window.scrollTo(0, 0);
  };

  const handleBack = () => {
    if (surveyState.currentStep === 1) {
      setSurveyState((prev) => ({ ...prev, currentStep: 0 }));
    } else {
      setSurveyState((prev) => ({ ...prev, currentStep: prev.currentStep - 1 }));
    }
  };

  // Render Welcome Screen
  if (surveyState.currentStep === 0) {
    return <WelcomeScreen onStart={handleStart} />;
  }

  // Render Results Screen
  if (surveyState.currentStep > QUESTIONS.length) {
    return <ResultsScreen />;
  }

  // Render Question Screen
  const currentQuestion = QUESTIONS.find((q) => q.id === surveyState.currentStep);

  if (!currentQuestion) {
    return <div>Error loading question</div>;
  }

  return (
    <QuestionScreen
      question={currentQuestion}
      currentStep={surveyState.currentStep}
      totalSteps={QUESTIONS.length}
      selectedOption={surveyState.answers[surveyState.currentStep]}
      onSelect={handleAnswerSelect}
      onNext={handleNext}
      onBack={handleBack}
      isSubmitting={isSubmitting}
    />
  );
};

export default App;