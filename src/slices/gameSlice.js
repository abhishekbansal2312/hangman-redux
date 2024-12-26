// gameSlice.js
import { createSlice } from "@reduxjs/toolkit";
import data from "../data/questions";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    questions: data,
    currentQuestionIndex: Math.floor(Math.random() * data.length),
    score: 0,
    isGameStarted: false,
    attempts: 7,
    guesses: [],
    wrongGuesses: 0,
  },
  reducers: {
    startGame(state) {
      state.isGameStarted = true;
    },
    endGame(state) {
      state.isGameStarted = false;
    },
    nextQuestion(state) {
      state.currentQuestionIndex = Math.floor(Math.random() * data.length);
      state.guesses = [];
      state.wrongGuesses = 0;
    },
    increaseScore(state) {
      state.score += 1;
    },
    resetGame(state) {
      state.score = 0;
      state.attempts = 7;
      state.guesses = [];
      state.wrongGuesses = 0;
      state.currentQuestionIndex = Math.floor(Math.random() * data.length);
    },
    checkGuess(state, action) {
      const { guess } = action.payload;
      if (!state.guesses.includes(guess)) {
        state.guesses.push(guess);
      }
      const currentQuestion = state.questions[state.currentQuestionIndex];
      if (!currentQuestion.word.includes(guess)) {
        state.wrongGuesses++;
        state.attempts -= 1;

        if (state.wrongGuesses >= state.attempts) {
          state.isGameStarted = false;
        }
      } else {
        const wordArray = currentQuestion.word.split("");
        const guessedLetters = new Set(state.guesses);
        const allLettersGuessed = wordArray.every((letter) =>
          guessedLetters.has(letter)
        );

        if (allLettersGuessed) {
          state.score += 1;
          state.guesses = [];
          state.currentQuestionIndex = Math.floor(Math.random() * data.length);
        }
      }
    },
  },
});

export const {
  startGame,
  endGame,
  nextQuestion,
  increaseScore,
  resetGame,
  checkGuess,
} = gameSlice.actions;
export default gameSlice.reducer;
