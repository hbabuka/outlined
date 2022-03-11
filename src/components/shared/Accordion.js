import React from "react";

export const Accordion = ({ question, answers }) => {
  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="answer">
        {Object.keys(answers).map((answer, i) => {
          return <p key={i}>{answers[answer]}</p>;
        })}
      </div>
    </div>
  );
};
