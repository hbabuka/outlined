import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  padding: 3rem 0;
  cursor: pointer;
  .faq-line {
    background-color: #cccccc;
    height: 0.2rem;
    margin: 2rem 0;
    width: 100%;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export const Accordion = ({ question, answers }) => {
  return (
    <DivStyled className="question">
      <h4>{question}</h4>
      <div className="answer">
        {Object.keys(answers).map((answer, i) => {
          return <p key={i}>{answers[answer]}</p>;
        })}
      </div>
      <div className="faq-line"></div>
    </DivStyled>
  );
};
