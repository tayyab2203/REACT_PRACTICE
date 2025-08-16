import { useState, useCallback } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(12);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numAllowed) {
      str += "0123456789";
    }
    if (charAllowed) {
      str += "~!@#$%^&*(){}_+-=[]";
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numAllowed, charAllowed]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-800 to-gray-900 p-6">
        <div className="w-full max-w-md bg-white/10 backdrop-blur-md shadow-xl rounded-2xl p-6 border border-white/20">
          <h1 className="text-3xl font-bold text-center text-white mb-6 tracking-wide">
            🔐 Password Generator
          </h1>

          {/* Password Display */}
          <div className="flex shadow-lg rounded-lg overflow-hidden mb-4">
            <input
              type="text"
              value={password}
              className="outline-none w-full py-3 px-4 text-lg text-white bg-gray-900/70 placeholder-gray-400"
              placeholder="Generate a password..."
              readOnly
            />
            <button
              onClick={() => {
                navigator.clipboard.writeText(password);
              }}
              className="px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition-all"
            >
              Copy
            </button>
          </div>

          {/* Controls */}
          <div className="flex flex-col gap-4 text-white">
            {/* Length Slider */}
            <div className="flex items-center justify-between">
              <label className="font-medium">Length: {length}</label>
              <input
                type="range"
                min={6}
                max={30}
                value={length}
                onChange={(e) => setLength(e.target.value)}
                className="cursor-pointer w-40 accent-indigo-500"
              />
            </div>

            {/* Checkboxes */}
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="numbers"
                checked={numAllowed}
                onChange={() => setNumAllowed((prev) => !prev)}
                className="w-5 h-5 accent-purple-500"
              />
              <label htmlFor="numbers">Include Numbers</label>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id="characters"
                checked={charAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="w-5 h-5 accent-purple-500"
              />
              <label htmlFor="characters">Include Symbols</label>
            </div>

            {/* Generate Button */}
            <button
              onClick={passwordGenerator}
              className="mt-4 w-full py-3 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-xl text-lg font-bold text-white shadow-lg hover:scale-105 transition-transform"
            >
              Generate Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
