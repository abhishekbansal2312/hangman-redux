import React from "react";
import { useSelector, useDispatch } from "react-redux";
import WordDisplay from "./WordDisplay";
import AlphabetBar from "./AlphabetBar";
import { capitiliser } from "../utils";
import {
  resetGame,
  startGame,
  nextQuestion,
  checkGuess,
} from "../slices/gameSlice";

const Category = () => {
  const category = useSelector(
    (state) => state.game.questions[state.game.currentQuestionIndex].category
  );
  return (
    <div className="text-lg font-medium text-gray-200 text-center capitalize mt-2">
      <span className="bg-slate-600 p-2 rounded-md">
        Theme: {capitiliser(category)}
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
    <div className="text-lg font-medium text-gray-200 text-center mt-2 bg-slate-800 rounded-lg px-2 py-1">
      Tries Left: {attemptsLeft}
    </div>
  );
};

const ResetGame = () => {
  const dispatch = useDispatch();
  return (
    <div className="text-lg font-medium text-center mt-2 bg-red-300 p-1 rounded-lg px-2 py-1">
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
  const dispatch = useDispatch();
  const question = useSelector(
    (state) => state.game.questions[state.game.currentQuestionIndex]
  );
  const isGameStarted = useSelector((state) => state.game.isGameStarted);
  const questionsAsked = useSelector((state) => state.game.questionsAsked);

  const handleStartGame = () => {
    dispatch(startGame());
  };

  const handleNextQuestion = () => {
    dispatch(nextQuestion());
  };

  const handleCheckGuess = (guess) => {
    dispatch(checkGuess({ guess }));
  };

  return (
    <div className="game-info flex flex-col justify-between h-full">
      {!isGameStarted ? (
        <div className="start-game flex flex-col items-center justify-center h-full">
          <button
            onClick={handleStartGame}
            className="text-xl bg-blue-500 text-white px-6 py-3 rounded-lg"
          >
            Start Game
          </button>
        </div>
      ) : (
        <>
          <div className="word flex flex-row justify-center items-center space-x-2">
            <WordDisplay word={question.word} />
          </div>

          <div className="text-lg font-medium text-gray-200 text-center my-2 max-w-xl">
            Hint: {question.hint}
          </div>
          <Category />

          <div className="flex items-center justify-center gap-5 mt-3">
            <Score />
            <AttemptLeft />
            <ResetGame />
          </div>
          <AlphabetBar onGuess={handleCheckGuess} />
          <div className="next-question text-center mt-4">
            <button
              onClick={handleNextQuestion}
              className="bg-green-500 text-white px-4 py-2 rounded-lg"
            >
              Next Question
            </button>
          </div>
          <>
            {questionsAsked > 0 && (
              <div className="text-lg font-medium text-gray-200 text-center mt-2 bg-slate-800 rounded-lg px-2 py-1">
                {questionsAsked}/10
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
}
