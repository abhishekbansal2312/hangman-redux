import { createSlice } from "@reduxjs/toolkit";
import data from "../data/questions";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    questions: data,
    currentQuestionIndex: null,
    score: 0,
    isGameStarted: false,
    attempts: 7,
    guesses: [],
    wrongGuesses: 0,
    usedQuestions: [],
    questionsAsked: 0,
  },
  reducers: {
    startGame(state) {
      state.isGameStarted = true;

      let firstIndex = Math.floor(Math.random() * state.questions.length);
      state.currentQuestionIndex = firstIndex;

      state.usedQuestions.push(firstIndex);
      state.questionsAsked = 1;
    },
    nextQuestion(state) {
      if (state.questionsAsked >= 10) {
        state.attempts = 0;
        return;
      }

      let nextIndex;
      do {
        nextIndex = Math.floor(Math.random() * state.questions.length);
        console.log(nextIndex);
      } while (state.usedQuestions.includes(nextIndex));

      state.currentQuestionIndex = nextIndex;
      state.usedQuestions.push(nextIndex);
      state.guesses = [];
      state.wrongGuesses = 0;
      state.questionsAsked += 1;
    },
    increaseScore(state) {
      state.score += 1;
    },
    resetGame(state) {
      state.score = 0;
      state.attempts = 7;
      state.guesses = [];
      state.wrongGuesses = 0;
      state.usedQuestions = [];
      state.questionsAsked = 1;
      let randomIndex = Math.floor(Math.random() * state.questions.length);
      state.currentQuestionIndex = randomIndex;
      state.usedQuestions.push(randomIndex);
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
      } else {
        const wordArray = currentQuestion.word.split("");
        const guessedLetters = new Set(state.guesses);

        const isWordGuessed = wordArray.every((letter) =>
          guessedLetters.has(letter)
        );

        if (isWordGuessed) {
          state.score += 1;
          state.guesses = [];
          state.wrongGuesses = 0;

          if (state.questionsAsked < 10) {
            let nextIndex;
            do {
              nextIndex = Math.floor(Math.random() * state.questions.length);
            } while (state.usedQuestions.includes(nextIndex));

            state.currentQuestionIndex = nextIndex;
            state.usedQuestions.push(nextIndex);
            state.questionsAsked += 1;
          } else {
            state.attempts = 0;
          }
        }
      }
    },
  },
});

export const { startGame, nextQuestion, increaseScore, resetGame, checkGuess } =
  gameSlice.actions;

export default gameSlice.reducer;
