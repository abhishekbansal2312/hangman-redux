import React from "react";
import { useSelector } from "react-redux";
import Header from "../components/Header";
import GameContent from "../components/GameContent";
import GameOver from "../components//GameOver";
import { Canvas } from "../components/Canvas";
export default function HangmanGame() {
  const attemptsLeft = useSelector((state) => state.game.attempts);
  const wrongGuesses = useSelector((state) => state.game.wrongGuesses);
  const isGameStarted = useSelector((state) => state.game.isGameStarted);
  console.log(attemptsLeft);

  return (
    <div className="hangman-container flex flex-col justify-center items-center h-screen bg-gray-900">
      <Header title="HangMan" />
      <div className="game-content flex flex-row justify-center items-start space-x-28">
        {isGameStarted && attemptsLeft !== 0 && (
          <div className="canvas-wrapper pt-16">
            <Canvas count={wrongGuesses} />
          </div>
        )}
        {attemptsLeft === 0 ? <GameOver /> : <GameContent />}
      </div>
    </div>
  );
}
