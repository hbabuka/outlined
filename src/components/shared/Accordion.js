import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const DivStyled = styled(motion.div)`
  padding: 3rem 0 0;
  h4 {
    cursor: pointer;
  }
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
  const [isActive, setIsActive] = useState(false);

  return (
    <DivStyled Layout className="question">
      <motion.h4 onClick={() => setIsActive(!isActive)}>{question}</motion.h4>
      {isActive && (
        <motion.div className="answer">
          {Object.keys(answers).map((answer, i) => {
            return <p key={i}>{answers[answer]}</p>;
          })}
        </motion.div>
      )}
      <div className="faq-line"></div>
    </DivStyled>
  );
};
