import React from "react";

export interface IQuestion {
  question: string;
  answerOptions: IAnswerOption[];
}

export interface IAnswerOption {
  text: string;
  isCorrect: boolean;
}

const Question = ({
  question,
  onOptionsClick = () => {},
}: {
  question: IQuestion;
  onOptionsClick: (isCorrect: boolean) => void;
}) => {
  return (
    <div className="p-8">
      <h2 className="mb-8 text-2xl font-bold">{question.question}</h2>
      <ul className="grid grid-cols-2 gap-4">
        {question.answerOptions.map((item, index) => {
          return (
            <li key={index}>
              <button
                className="w-full rounded-md bg-slate-300 p-3 hover:bg-black hover:text-white"
                onClick={() => onOptionsClick(item.isCorrect)}
              >
                {item.text}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Question;
