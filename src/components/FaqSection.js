import React from "react";
import { Accordion } from "./shared/Accordion";
import { questions } from "../data";

const FaqSection = () => {
  return (
    <div className="faq">
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <div>
        {questions.map((question) => {
          return (
            <Accordion
              question={question.question}
              answers={question.answers}
              key={question.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FaqSection;
