import { Trophy } from "lucide-react";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

interface GameOverProps {
  onRestart: () => void;
  score: number;
  totalQuestions: number;
}

export default function GameOver({
  onRestart,
  score,
  totalQuestions,
}: GameOverProps) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  // 🎁 Reward logic
  let rewardTitle = "Keep Going 💪";
  let rewardDesc =
    "Review your answers and try again to unlock HealthCoins!";
  let rewardBadge = "";
  let rewardColor = "text-gray-600";

  if (percentage >= 80) {
    rewardTitle = "🎉 Excellent!";
    rewardDesc = "You’ve earned 100 HealthCoins + “Diabetes Smart” Badge!";
    rewardBadge = "🏅";
    rewardColor = "text-green-600";
  } else if (percentage >= 60) {
    rewardTitle = "👏 Good Job!";
    rewardDesc = "You’ve earned 50 HealthCoins + Bonus Tip Sheet (Diet & Fitness)!";
    rewardBadge = "🎊";
    rewardColor = "text-blue-600";
  }

  return (
    <div className="relative p-8 text-center bg-white rounded-2xl shadow-lg max-w-md mx-auto">
      {showConfetti && <Confetti numberOfPieces={150} recycle={false} />}

      <Trophy className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Game Over!</h2>

      <p className="text-lg text-gray-600 mb-1">
        Final Score: <b>{score}</b> / {totalQuestions}
      </p>
      <p className="text-gray-500 mb-6">({percentage}% correct)</p>

      <div className="border-t border-gray-200 pt-4">
        <h3 className={`text-xl font-semibold mb-2 ${rewardColor}`}>
          {rewardBadge} {rewardTitle}
        </h3>
        <p className="text-gray-700">{rewardDesc}</p>

        {percentage >= 60 && (
          <p className="mt-3 text-sm text-gray-500 italic">
            Partner offer: “10% off on GlucoCare XR refills” 
          </p>
        )}
      </div>

      <button
        onClick={onRestart}
        className="mt-8 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all"
      >
        🔁 Play Again
      </button>
    </div>
  );
}
