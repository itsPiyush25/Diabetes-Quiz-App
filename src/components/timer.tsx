// Timer.tsx
import React from "react";

interface TimerProps {
  timeLeft: number;
  totalTime?: number; 
}

const Timer: React.FC<TimerProps> = ({ timeLeft, totalTime = 15 }) => {
  const progress = (timeLeft / totalTime) * 100;

  return (
    <div className="mb-6 text-center">
      <div className="text-lg font-semibold text-gray-700">
        Time Left: {timeLeft}s
      </div>

      {/* Optional progress bar animation */}
      <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
        <div
          className={`h-2.5 rounded-full ${
            progress < 30 ? "bg-red-500" : "bg-green-500"
          }`}
          style={{ width: `${progress}%`, transition: "width 0.5s linear" }}
        ></div>
      </div>
    </div>
  );
};

export default Timer;
