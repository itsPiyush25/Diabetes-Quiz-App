import { HeartPulse, Award } from "lucide-react";

interface StartScreenProps {
  onStart: () => void;
}

export default function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 p-6">
      {/* Sponsor Branding */}
      <div className="text-center max-w-md bg-white shadow-xl rounded-3xl p-8 border border-blue-100">
        {/* Logo & Title */}
        <div className="mb-6">
          <div className="flex justify-center items-center space-x-2 mb-2">
            <HeartPulse className="w-8 h-8 text-red-500" />
            <h1 className="text-3xl font-extrabold text-gray-800">
              OneTouch Lifescience
            </h1>
          </div>
          <h2 className="text-xl text-gray-600 italic">
            Diabetes Awareness Quiz — <br />
            <span className="font-semibold text-blue-700">
              “Know More, Manage Better”
            </span>
          </h2>
        </div>

        {/* Sponsor Section */}
        <div className="mt-4 mb-6 bg-blue-50 rounded-lg py-3 px-4 border border-blue-200">
          <p className="text-sm text-gray-600">
            Sponsored by:
            <span className="font-semibold text-blue-800">
              {" "}ABC Pharma — MetCare Division
            </span>
          </p>
        </div>

        {/* Target Audience */}
        <div className="text-gray-700 text-sm leading-relaxed mb-4">
          <p>
            Designed for{" "}
            <span className="font-medium">
              diabetic patients, caregivers, and health-conscious users.
            </span>
          </p>
          <p className="mt-2 text-gray-500">
            Format: <b>10 questions × 10 points</b> each + bonus{" "}
            <span className="text-green-600 font-semibold">HealthCoins</span>!
          </p>
        </div>

        {/* Reward Highlight */}
        <div className="flex items-center justify-center space-x-2 bg-green-50 border border-green-200 rounded-lg py-2 mb-6">
          <Award className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-700 font-medium">
            Earn HealthCoins and unlock rewards!
          </p>
        </div>

        {/* Start Button */}
        <button
          onClick={onStart}
          className="mt-4 px-8 py-3 bg-blue-600 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-blue-700 transition-all"
        >
          🚀 Start Quiz
        </button>
      </div>

      {/* Footer */}
      <p className="text-xs text-gray-400 mt-6">
        © 2025 OneTouch Lifescience | Educational Purpose Only
      </p>
    </div>
  );
}
