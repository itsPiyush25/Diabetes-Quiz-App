import { useEffect, useState } from "react";
import GameOver from "./components/game-over";
import QuestionCard from "./components/question-card";
import StartScreen from "./components/start-screen";
import RewardScreen from "./components/reward-screen";
import { GameState } from "./types/quiz";
import { QUESTIONS } from "./data/questions";
import Timer from "./components/timer";

function App() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15); // ⏱️ 15 seconds per question

  useEffect(() => {
    let timer: number;

    if (gameState === "playing" && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === "playing") {
      handleNextQuestion(); // Auto move to next question when time runs out
    }

    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleStart = () => {
    setGameState("playing");
    setTimeLeft(15);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);
    const isCorrect = index === QUESTIONS[currentQuestion].correct;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // Proceed after short delay
    setTimeout(() => {
      handleNextQuestion();
    }, 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(15); // Reset timer for next question
    } else {
      setGameState("end");
    }
  };

  const handleShowReward = () => {
    setGameState("reward");
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        {gameState === "start" && <StartScreen onStart={handleStart} />}

        {gameState === "playing" && (
          <div className="p-8">
            <Timer timeLeft={timeLeft} totalTime={15} />
            <QuestionCard
              question={QUESTIONS[currentQuestion]}
              onAnswerSelect={handleAnswer}
              selectedAnswer={selectedAnswer}
              totalQuestions={QUESTIONS.length}
              currentQuestion={currentQuestion}
            />
            <div className="mt-6 text-center text-gray-600">
              Score: {score}/{QUESTIONS.length}
            </div>
          </div>
        )}

        {gameState === "end" && (
          <GameOver
            score={score}
            totalQuestions={QUESTIONS.length}
            onRestart={handleShowReward} 
          />
        )}

        {gameState === "reward" && (
          <RewardScreen onRestart={handleStart} /> 
        )}
      </div>
    </div>
  );
}

export default App;
