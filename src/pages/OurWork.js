import React from "react";
import styled from "styled-components";
import { Movie } from "../components/shared/Movie";
import { moviesData } from "../data";
import { motion } from "framer-motion";
import { pageAnimation, slider, sliderContainer } from "../animation";

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

//Frame Animation
const Frame = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: ${(props) => props.color};
  z-index: 2;
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
      <motion.div variants={sliderContainer}>
        <Frame color="#fffebf" variants={slider}></Frame>
        <Frame color="#ff8efb" variants={slider}></Frame>
        <Frame color="#8ed2ff" variants={slider}></Frame>
        <Frame color="#8effa0" variants={slider}></Frame>
      </motion.div>

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
