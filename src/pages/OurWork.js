import React from "react";
import styled from "styled-components";
import { Movie } from "../components/shared/Movie";
import { moviesData } from "../data";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      {moviesData.map((movie) => {
        return (
          <Movie
            title={movie.title}
            imageSource={movie.mainImg}
            linkTo={movie.url}
            key={movie.id}
          />
        );
      })}
    </Work>
  );
};

export default OurWork;
