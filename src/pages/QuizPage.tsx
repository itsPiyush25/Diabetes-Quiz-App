import { useEffect, useState } from "react";
import GameOver from "../components/game-over";
import QuestionCard from "../components/question-card";
import StartScreen from "../components/start-screen";
import RewardScreen from "../components/reward-screen";
import { GameState } from "../types/quiz";
import { QUESTIONS } from "../data/questions";
import Timer from "../components/timer";

export default function QuizPage() {
  const [gameState, setGameState] = useState<GameState>("start");
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [timeLeft, setTimeLeft] = useState<number>(15);

  useEffect(() => {
    let timer: number;
    if (gameState === "playing" && timeLeft > 0) {
      timer = window.setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && gameState === "playing") {
      handleNextQuestion();
    }
    return () => clearInterval(timer);
  }, [timeLeft, gameState]);

  const handleStart = () => {
    setGameState("playing");
    setTimeLeft(5);
    setScore(0);
    setCurrentQuestion(0);
    setSelectedAnswer(null);
  };

  const handleAnswer = (index: number): void => {
    setSelectedAnswer(index);
    const isCorrect = index === QUESTIONS[currentQuestion].correct;
    if (isCorrect) setScore((prev) => prev + 1);
    setTimeout(() => handleNextQuestion(), 1500);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < 4) { // only first 5 questions
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
      setTimeLeft(15);
    } else {
      setGameState("end");
    }
  };

  const handleShowReward = () => setGameState("reward");

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      {gameState === "start" && <StartScreen onStart={handleStart} />}
      {gameState === "playing" && (
        <div className="p-8">
          <Timer timeLeft={timeLeft} totalTime={15} />
          <QuestionCard
            question={QUESTIONS[currentQuestion]}
            onAnswerSelect={handleAnswer}
            selectedAnswer={selectedAnswer}
            totalQuestions={5}
            currentQuestion={currentQuestion}
          />
          <div className="mt-6 text-center text-gray-600">
            Score: {score}/5
          </div>
        </div>
      )}
      {gameState === "end" && (
        <GameOver
          score={score}
          totalQuestions={5}
          onRestart={handleShowReward}
        />
      )}
      {gameState === "reward" && <RewardScreen onRestart={handleStart} />}
    </div>
  );
}
