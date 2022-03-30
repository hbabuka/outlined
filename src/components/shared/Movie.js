import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fade, photoAnimation, lineAnimation } from "../../animation";
import { motion } from "framer-motion";

const DivStyled = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #23d997;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

export const Movie = ({ title, imageSource, linkTo }) => {
  return (
    <DivStyled>
      <motion.h2 variants={fade}>{title}</motion.h2>
      <motion.div className="line" variants={lineAnimation}></motion.div>
      <Link to={linkTo}>
        <Hide>
          <motion.img
            src={imageSource}
            alt={imageSource}
            variants={photoAnimation}
          />
        </Hide>
      </Link>
    </DivStyled>
  );
};
