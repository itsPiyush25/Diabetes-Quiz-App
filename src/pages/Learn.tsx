export default function Learn() {
  return (
    <div className="px-4 py-6">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Educational Videos
      </h2>

      <div className="grid md:grid-cols-2 gap-8 place-items-center">
        <div className="w-full max-w-xl">
          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/HJGjNTJgf48"
            title="Diabetes Education 1"
            allowFullScreen
          ></iframe>
        </div>

        <div className="w-full max-w-xl">
          <iframe
            className="w-full aspect-video rounded-xl shadow-md"
            src="https://www.youtube.com/embed/luT8bUttbbg"
            title="Diabetes Education 2"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
