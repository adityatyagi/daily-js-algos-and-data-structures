import React from "react";
import { IQuestion } from "./Question";

const Result = ({
  answers,
  questions,
  onReset = () => {},
}: {
  answers: boolean[];
  questions: IQuestion[];
  onReset: () => void;
}) => {
  // get an array of all the answers which are correct - ex. [true, true, true];
  const correctQuestions = answers.filter((item) => item);

  return (
    <div className="p-8">
      <h3>
        You have answered {correctQuestions.length} correctly out of{" "}
        {questions.length} questions
      </h3>
      <ul className="mt-6">
        {questions.map((item, index) => {
          return (
            <li
              key={index}
              className={`mb-2 text-left ${answers[index] ? "text-green-900" : "text-red-800"}`}
            >
              {item.question}
            </li>
          );
        })}
      </ul>
      <button
        className="w-full rounded-md bg-slate-300 p-3 hover:bg-black hover:text-white"
        onClick={onReset}
      >
        Reset Quiz
      </button>
    </div>
  );
};

export default Result;
