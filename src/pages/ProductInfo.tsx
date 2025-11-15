import { CheckCircle } from "lucide-react";

export default function ProductInfo() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            OneTouch Verio Flex
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Smart blood glucose meter with accurate & easy monitoring
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Features Column */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">ColorSure Technology</h3>
                <p className="text-gray-600 text-sm">Instantly shows if your result is in, above, or below range</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Fast & Accurate</h3>
                <p className="text-gray-600 text-sm">Results in just 5 seconds with proven accuracy</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-800 mb-1">Smart Connectivity</h3>
                <p className="text-gray-600 text-sm">Syncs with OneTouch Reveal app for insights</p>
              </div>
            </div>

            <a
              href="https://www.onetouch.in/products/glucose-meters/onetouch-verio-flex"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold transform hover:scale-105 mt-4"
            >
              View Official Product Page →
            </a>
          </div>

          {/* Image Column */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20"></div>
              <img
                src="/glucometer.png"
                alt="OneTouch Verio Flex"
                className="relative rounded-2xl shadow-2xl w-80 h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}