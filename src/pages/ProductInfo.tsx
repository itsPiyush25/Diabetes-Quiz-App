export default function ProductInfo() {
  return (
    <div className="max-w-xl mx-auto p-6 text-center">
      {/* Card Container */}
      <div className="bg-white shadow-lg rounded-2xl p-8 border border-gray-200">
        
        <h2 className="text-3xl font-extrabold mb-3 text-gray-800">
          OneTouch Verio Flex
        </h2>

        <p className="mb-6 text-gray-600 text-lg">
          Smart blood glucose meter with accurate & easy monitoring.
        </p>

        <a
          href="https://www.onetouch.in/products/glucose-meters/onetouch-verio-flex"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-purple-700 text-white px-6 py-3 rounded-lg hover:bg-purple-800 transition font-medium shadow-md"
        >
          View Official Product Page
        </a>

        <img
          src="/glucometer.png"
          alt="OneTouch Verio Flex"
          className="mx-auto mt-8 rounded-xl shadow-md w-64"
        />
      </div>
    </div>
  );
}
