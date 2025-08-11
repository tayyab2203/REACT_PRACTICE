import "./App.css";

function App() {
  return (
    <>
      <div className="bg-blue-500 text-white p-5 rounded-lg">
        hello Tailwind
      </div>
      <div className="bg-red-500 text-white p-4 rounded-sm m-2">
        hello Tailwind
      </div>
      <div className="bg-green-600 text-green-900 p-4 rounded-2xl ">
        Green Box
      </div>

      <div className="bg-gray-200 text-black p-6 m-4 rounded-b-2xl">
        {" "}
        this is an example of margine padding
      </div>

      <div className="bg-amber-500 p-4 m-3 rounded-t-xl text-lg font-bold text-center animate-pulse">
        This in an exmple od text classes
      </div>
      <div className="bg-red-600 m-3 p-4 text-4xl font-light text-left rounded-b-xl animate-pulse transition">
        This is also an example of text classes
      </div>

      {/* flexboxes */}
      <div className="flex justify-between items-center">
        <div className="bg-blue-700 p-4 m-3">left</div>
        <div className="bg-pink-400 p-4 m-3">right</div>
      </div>
      <button className="bg-blue-700 hover:bg-blue-500 text-white px-4 py-2 rounded">
        Press me
      </button>

      <div className="bg-red-400 md:bg-amber-300 lg:bg-blue-400 p-4 text-white">
        this changes color on different screens
      </div>

      <div className="max-w-sm mx-auto mt-1.5 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl text-black font-bold mb-2">Card Title</h2>
        <p className="text-gray-600 mb-4">
          This is a simple Tailwind CSS card.
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Learn More
        </button>
      </div>

      
    </>
  );
}

export default App;
