import React from "react";
import { Canvas } from "../components/Canvas";
import { capitiliser } from "../utils/index"; // Assuming capitiliser capitalizes text
import { useSelector, useDispatch } from "react-redux";
import WordDisplay from "../components/WordDisplay";
import AlphabetBar from "../components/AlphabetBar";
import { endGame, resetGame } from "../slices/gameSlice";

export default function HangMan() {
  const dispatch = useDispatch();
  const selectQuestion = useSelector(
    (state) => state.game.currentQuestionIndex
  );
  const selectQuestions = useSelector((state) => state.game.questions);
  const question = selectQuestions[selectQuestion];
  const wrongGuesses = useSelector((state) => state.game.wrongGuesses);
  const isGameStarted = useSelector((state) => state.game.isGameStarted);
  const score = useSelector((state) => state.game.score);
  const attemptsLeft = useSelector(
    (state) => state.game.attempts - wrongGuesses
  );

  const handleResetGame = () => {
    dispatch(resetGame());
    dispatch(endGame());
  };

  return (
    <div className="hangman-container mx-auto w-full min-h-screen flex flex-col justify-center items-center space-y-8 py-8 bg-gray-900">
      <h1 className="text-4xl font-bold text-white">HangMan</h1>
      <div className="game-content flex flex-row justify-center items-start space-x-8">
        <div className="canvas-wrapper">
          <Canvas count={wrongGuesses} />
        </div>
        <div className="word-and-hint flex flex-col justify-between h-full">
          <div className="word flex flex-row justify-center items-center space-x-2">
            <WordDisplay word={question.word} />
          </div>

          <div className="text-lg font-medium text-gray-200 text-center my-2">
            {question.hint}
          </div>
          <div className="text-lg font-medium text-gray-200 text-center capitalize mt-2">
            <span className="bg-slate-600 p-2 rounded-md">
              Theme: {capitiliser(question.category)}
            </span>
          </div>
          {isGameStarted && (
            <div className="text-lg font-medium text-gray-200 text-center mt-2">
              <button onClick={handleResetGame}>Reset Game</button>
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
      </div>
    </div>
  );
}
