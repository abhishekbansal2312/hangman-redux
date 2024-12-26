import React from "react";
import { alphabets } from "../utils/index";
import { useDispatch, useSelector } from "react-redux";
import { checkGuess } from "../slices/gameSlice";
import { capitiliser } from "../utils/index";

const AlphabetBar = () => {
  const guesses = useSelector((state) => state.game.guesses);
  const dispatch = useDispatch();

  const handleGuessClick = (letter) => {
    dispatch(checkGuess({ guess: letter }));
  };

  return (
    <div className="grid grid-cols-10 gap-2 mt-5">
      {alphabets &&
        alphabets[0].split("").map((alphabet) => (
          <button
            key={alphabet}
            letter={alphabet}
            onClick={() => {
              handleGuessClick(alphabet);
            }}
            disabled={guesses.includes(alphabet)}
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md 
                ${
                  guesses.includes(alphabet)
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : ""
                }`}
          >
            {capitiliser(alphabet)}
          </button>
        ))}
    </div>
  );
};

export default AlphabetBar;
