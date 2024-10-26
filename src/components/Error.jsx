function Error() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-lg animate-fadeIn">
          <div className="text-6xl text-red-500 mb-4 animate-bounce">⚠️</div>
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops!</h1>
          <p className="text-xl text-gray-600 mb-4">
            The page you are looking for does not exist.
          </p>
          <a
            href="/"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            Go Back Home
          </a>
        </div>
      </div>
    </>
  );
}

export default Error;
