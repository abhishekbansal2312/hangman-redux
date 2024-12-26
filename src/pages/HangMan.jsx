import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { resetGame, endGame } from "../slices/gameSlice";
import Header from "../components/Header";
import GameContent from "../components/GameContent";
import GameOver from "../components//GameOver";
import { Canvas } from "../components/Canvas";
export default function HangmanGame() {
  const dispatch = useDispatch();
  const attemptsLeft = useSelector((state) => state.game.attempts);
  const wrongGuesses = useSelector((state) => state.game.wrongGuesses);
  const handleResetGame = () => {
    dispatch(resetGame());
  };
  console.log(attemptsLeft);

  return (
    <div className="hangman-container flex flex-col justify-center items-center h-screen bg-gray-900">
      <Header title="HangMan" />
      <div className="game-content flex flex-row justify-center items-start space-x-8">
        <div className="canvas-wrapper">
          <Canvas count={wrongGuesses} />
        </div>
        {attemptsLeft === 0 ? (
          <GameOver onReset={handleResetGame} />
        ) : (
          <GameContent onReset={handleResetGame} />
        )}
      </div>
    </div>
  );
}
