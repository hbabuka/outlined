import React from "react";
import { Accordion } from "../shared/Accordion";
import { questions } from "../../data";
import { Shared } from "../../styles/shared";
import styled from "styled-components";
import { AnimateSharedLayout } from "framer-motion";
import { useScroll } from "../shared/useScroll";
import { scrollReveal } from "../../animation";

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
  const [element, controls] = useScroll();

  return (
    <FaqStyled
      variants={scrollReveal}
      animate={controls}
      ref={element}
      initial="hidden"
    >
      <h2>
        Any Questions? <span>FAQ</span>
      </h2>
      <AnimateSharedLayout>
        {questions.map((question) => {
          return (
            <Accordion
              question={question.question}
              answers={question.answers}
              key={question.id}
            />
          );
        })}
      </AnimateSharedLayout>
    </FaqStyled>
  );
};

export default FaqSection;
