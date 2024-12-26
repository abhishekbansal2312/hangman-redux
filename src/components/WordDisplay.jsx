import React from "react";
import { useSelector } from "react-redux";
import { capitiliser } from "../utils";

const WordDisplay = ({ word }) => {
  const guesses = useSelector((state) => state.game.guesses);
  return (
    <div className="text-2xl flex gap-3 font-bold text-white my-6">
      {word.split("").map((letter, index) => (
        <div key={index} className="">
          {guesses.includes(letter) ? capitiliser(letter) : "__"}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
