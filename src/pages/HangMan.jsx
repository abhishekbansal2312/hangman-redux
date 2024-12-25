import React, { useState } from "react";
import { Canvas } from "../components/Canvas";
import { alphabets } from "../utils/index";
import { capitiliser } from "../utils/index";

export default function HangMan() {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-4xl mx-auto flex flex-col justify-center items-center space-y-8 py-8">
      <h1 className="text-4xl font-bold text-gray-800">HangMan</h1>
      <div className="flex flex-wrap justify-center items-start space-x-8">
        <Canvas count={count} />
        <div className="grid grid-cols-8 gap-3">
          {/* {
            guess.map()
        } */}
          {alphabets &&
            alphabets[0].split("").map((alphabet) => (
              <button
                key={alphabet}
                className="m-1 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none text-xl font-medium"
              >
                {capitiliser(alphabet)}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
