"use client";
import React, { useState } from "react";
import questions from "./questions.json";
import Question, { IQuestion } from "./Question";
import Result from "./Result";

const QuizApp = () => {
  // states
  // active question
  const [currentQuestion, setCurrentQuestions] = useState<number>(0); // first questions as the current

  // user all answers
  const [usersAnswers, setUsersAnswers] = useState<boolean[]>([]); // list of all answers

  // save the user answer and move to next question
  function handleOptionsClick(answer: boolean) {
    // if the user has not answered all questions
    if (usersAnswers.length < questions.length) {
      setUsersAnswers((state) => [...state, answer]);
      setCurrentQuestions((state) => ++state);
    }
  }

  function onResetHandler() {
    setCurrentQuestions(0);
    setUsersAnswers([]);
  }

  return (
    <div className="h-screen w-full text-center">
      <h1>Quiz App</h1>
      <section className="m-5 border-2 border-solid border-black">
        {/* Question component */}
        {currentQuestion < questions.length && (
          <Question
            question={questions[currentQuestion]}
            onOptionsClick={handleOptionsClick}
          />
        )}

        {/* Result component */}
        {currentQuestion === questions.length && (
          <Result
            questions={questions}
            answers={usersAnswers}
            onReset={onResetHandler}
          />
        )}
      </section>
    </div>
  );
};

export default QuizApp;
