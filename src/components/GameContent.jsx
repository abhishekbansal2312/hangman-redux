import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WordDisplay from "./WordDisplay";
import AlphabetBar from "./AlphabetBar";
import { capitiliser } from "../utils";
import { resetGame } from "../slices/gameSlice";

const Category = () => {
  const category = useSelector(
    (state) => state.game.questions[state.game.currentQuestionIndex].category
  );
  return (
    <div className="text-lg font-medium text-gray-200 text-center capitalize mt-2">
      <span className="bg-slate-600 p-2 rounded-md">
        Theme:
        {capitiliser(category)}
      </span>
    </div>
  );
};

const Score = () => {
  const score = useSelector((state) => state.game.score);
  return (
    <div className="text-lg font-medium text-gray-200 text-center mt-2 bg-slate-800 px-2 rounded-lg py-1">
      Score: {score}
    </div>
  );
};

const AttemptLeft = () => {
  const attemptsLeft = useSelector((state) => state.game.attempts);
  return (
    <div className="text-lg font-medium text-gray-200 text-center mt-2 bg-slate-800  rounded-lg px-2 py-1">
      Tries Left: {attemptsLeft}
    </div>
  );
};
const ResetGame = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-lg font-medium  text-center mt-2 bg-red-300 p-1 rounded-lg px-2 py-1">
      <button
        onClick={() => dispatch(resetGame())}
        className="btn btn-secondary"
      >
        Reset Game
      </button>
    </div>
  );
};

export default function GameContent() {
  const question = useSelector(
    (state) => state.game.questions[state.game.currentQuestionIndex]
  );

  return (
    <div className="game-info flex flex-col justify-between h-full">
      <div className="word flex flex-row justify-center items-center space-x-2">
        <WordDisplay word={question.word} />
      </div>

      <div className="text-lg font-medium text-gray-200 text-center my-2 max-w-xl">
        {question.hint}
      </div>
      <Category />

      <div className="flex items-center justify-center gap-5 mt-3">
        <Score />
        <AttemptLeft />
        <ResetGame />
      </div>
      <AlphabetBar />
    </div>
  );
}
