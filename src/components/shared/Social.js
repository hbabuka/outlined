import React from "react";
import { titleAnimation } from "../../animation";
import styled from "styled-components";
import { motion } from "framer-motion";

const Hide = styled.div`
  overflow: hidden;
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background-color: #353535;
`;

const SocialStyled = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export const Social = ({ label }) => {
  return (
    <Hide>
      <SocialStyled variants={titleAnimation}>
        <Circle />
        <h2>{label}</h2>
      </SocialStyled>
    </Hide>
  );
};
