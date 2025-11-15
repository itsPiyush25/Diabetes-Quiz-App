export default function Learn() {
  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
        Educational Videos
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Video Card 1 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
          <iframe
            className="w-full aspect-video rounded-xl mb-4"
            src="https://www.youtube.com/embed/HJGjNTJgf48"
            title="Diabetes Education 1"
            allowFullScreen
          ></iframe>
          <h3 className="font-semibold text-lg text-gray-800">Understanding Diabetes</h3>
          <p className="text-gray-600 text-sm mt-2">Learn the basics of diabetes management and monitoring</p>
        </div>

        {/* Video Card 2 */}
        <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow">
          <iframe
            className="w-full aspect-video rounded-xl mb-4"
            src="https://www.youtube.com/embed/luT8bUttbbg"
            title="Diabetes Education 2"
            allowFullScreen
          ></iframe>
          <h3 className="font-semibold text-lg text-gray-800">How to Use Your Meter</h3>
          <p className="text-gray-600 text-sm mt-2">Step-by-step guide to accurate blood glucose testing</p>
        </div>
      </div>
    </div>
  );
}