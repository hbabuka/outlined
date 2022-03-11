import React from "react";

export const Accordion = ({ question, answers }) => {
  return (
    <div className="question">
      <h4>{question}</h4>
      <div className="answer">
        {Object.keys(answers).map((item, i) => {
          return <p key={i}>{answers[item]}</p>;
        })}
      </div>
    </div>
  );
};
