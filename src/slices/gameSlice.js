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
  },
  reducers: {
    startGAme(state) {
      state.isGameStarted = true;
    },
    endGame(state) {
      state.isGameStarted = false;
    },
    nextQuestion(state) {
      state.currentQuestionIndex = Math.floor(Math.random() * data.length);
    },
    increaseScore(state) {
      state.score += 1;
    },
    decreaseAttempts(state) {
      state.attempts -= 1;
    },
    resetGame(state) {
      state.score = 0;
      state.attempts = 7;
    },
    checkGuess(state, action) {
      const { guess } = action.payload;
      state.guesses.push(guess);
    },
  },
});

export const {} = gameSlice.actions;
export default gameSlice.reducer;
