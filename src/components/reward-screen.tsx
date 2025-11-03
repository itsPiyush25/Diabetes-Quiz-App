import { Gift, BadgeCheck } from "lucide-react";

interface RewardScreenProps {
  onRestart: () => void;
}

export default function RewardScreen({ onRestart }: RewardScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-6">
      <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md text-center border border-green-200">
        {/* Icons and Title */}
        <Gift className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          🎉 Congratulations!
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          You got <b className="text-green-700">30% discount</b> on{" "}
          <span className="font-semibold text-green-800">
            OneTouch Lifescience Glucometer
          </span>
        </p>

        {/* Reward Image */}
        <div className="flex justify-center mb-6">
          <img
            src="/onetouch-offer.jpg" 
            alt="OneTouch Glucometer"
            className="rounded-xl shadow-md w-64 h-auto"
          />
        </div>

        {/* ISO note */}
        <p className="text-xs text-gray-500 italic mb-4">
          Accuracy You Can Trust – 7 years of proven test strip accuracy (EN ISO 15197:2015)
        </p>

        {/* Badge */}
        <div className="flex items-center justify-center space-x-2 bg-green-50 border border-green-200 rounded-lg py-2 px-3 mb-6">
          <BadgeCheck className="w-5 h-5 text-green-600" />
          <p className="text-sm text-green-700 font-medium">
            Verified Partner Offer –  OneTouch Lifescience | MetCare Division
          </p>
        </div>

        {/* Buttons */}
        <button
          onClick={onRestart}
          className="px-8 py-3 bg-green-600 text-white font-semibold rounded-xl shadow-md hover:bg-green-700 transition-all"
        >
          🔁 Play Again
        </button>
      </div>

      <p className="text-xs text-gray-400 mt-6">
        © 2025 OneTouch Lifescience | Educational Purpose Only
      </p>
    </div>
  );
}
