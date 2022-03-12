import React from "react";
import styled from "styled-components";
import { Movie } from "../components/shared/Movie";
import { moviesData } from "../data";

const Work = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0;
  }
`;

const OurWork = () => {
  return (
    <Work>
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
