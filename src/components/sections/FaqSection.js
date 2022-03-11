import React from "react";
import { Accordion } from "../shared/Accordion";
import { questions } from "../../data";
import { Shared } from "../../styles/shared";
import styled from "styled-components";

const FaqStyled = styled(Shared.Section.Wrapper)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
`;

const FaqSection = () => {
  return (
    <FaqStyled>
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
    </FaqStyled>
  );
};

export default FaqSection;