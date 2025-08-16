import { useState } from "react"
import "./App.css"
function App() {
const [color, setColor] = useState("yellow")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        <div className="flex flex-wrap justify-center bg-white shadow-lg gap-3 px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none cursor-pointer bg-red-500 px-4 py-1 rounded-full shadow-lg ">red</button>
          <button onClick={() => setColor("blue")} className="outline-none cursor-pointer  bg-blue-500 px-4 py-1 rounded-full shadow-lg ">Blue</button>
          <button onClick={() => setColor("green")} className="outline-none cursor-pointer   bg-green-500 px-4 py-1 rounded-full shadow-lg ">Green</button>
          <button onClick={() => setColor("orange")} className="outline-none cursor-pointer  bg-orange-500 px-4 py-1 rounded-full shadow-lg ">orange</button>
          <button onClick={() => setColor("indigo")} className="outline-none cursor-pointer  bg-indigo-500 px-4 py-1 rounded-full shadow-lg ">Indigo</button>
          <button onClick={() => setColor("violet")} className="outline-none cursor-pointer  bg-violet-500 px-4 py-1 rounded-full shadow-lg ">Violet</button>
          <button onClick={() => setColor("black")} className="outline-none cursor-pointer   bg-black text-white px-4 py-1 rounded-full shadow-lg ">Black</button>
        </div>
      </div>
    </div>
  )
}

export default App
