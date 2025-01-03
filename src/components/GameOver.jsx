import React from "react";
import { useSelector } from "react-redux";
import { resetGame } from "../slices/gameSlice";
import { useDispatch } from "react-redux";
export default function GameOver({ onReset }) {
  const score = useSelector((state) => state.game.score);
  const dispatch = useDispatch();
  return (
    <div className="game-over flex flex-col items-center  bg-gray-700 p-6 min-w-80 rounded-lg shadow-md">
      <p className="text-lg font-medium text-white text-center">
        Thank you for Playing. Your score is {score}
      </p>
      <button
        onClick={() => dispatch(resetGame())}
        className="mt-4  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Play Again
      </button>
    </div>
  );
}
