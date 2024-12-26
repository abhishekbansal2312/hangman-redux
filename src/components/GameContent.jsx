import React from "react";
import { useSelector } from "react-redux";
import WordDisplay from "./WordDisplay";
import AlphabetBar from "./AlphabetBar";
import { capitiliser } from "../utils";

export default function GameContent({ onReset }) {
  const question = useSelector(
    (state) => state.game.questions[state.game.currentQuestionIndex]
  );
  const score = useSelector((state) => state.game.score);
  const attemptsLeft = useSelector((state) => state.game.attempts);

  return (
    <div className="game-info flex flex-col justify-between h-full">
      <div className="word flex flex-row justify-center items-center space-x-2">
        <WordDisplay word={question.word} />
      </div>

      <div className="text-lg font-medium text-gray-200 text-center my-2">
        {question.hint}
      </div>
      <div className="text-lg font-medium text-gray-200 text-center capitalize mt-2">
        <span className="bg-slate-600 p-2 rounded-md">
          Theme:{" "}
          {useSelector((state) =>
            capitiliser(
              state.game.questions[state.game.currentQuestionIndex].category
            )
          )}
        </span>
      </div>
      {useSelector((state) => state.game.isGameStarted) && (
        <div className="text-lg font-medium text-gray-200 text-center mt-2">
          <button onClick={onReset} className="btn btn-secondary">
            Reset Game
          </button>
        </div>
      )}
      <div className="flex items-center justify-center gap-5 mt-3">
        <div className="text-lg font-medium text-gray-200 text-center mt-2 bg-slate-800 p-2 rounded-lg">
          Score: {score}
        </div>
        <div className="text-lg font-medium text-gray-200 text-center mt-2 bg-slate-800 p-1 rounded-lg">
          Tries Left: {attemptsLeft}
        </div>
      </div>
      <AlphabetBar />
    </div>
  );
}
