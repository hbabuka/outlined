import React from "react";

export const Accordion = ({ question, answers }) => {
  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="answer">
        {answers.map((answer) => {
          return <p>{answer}</p>;
        })}
      </div>
    </div>
  );
};
