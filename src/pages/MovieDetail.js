import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { moviesData } from "../data";
import { Award } from "../components/shared/Award";

const Details = styled.div`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  display: flex;
  min-height: 80vh;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`;

const MovieDetail = () => {
  const location = useLocation();
  const url = location.pathname;

  console.log("url", url);
  const movies = moviesData;
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const currentMovie = movies.find((item) => item.url === url);
    setMovie(currentMovie);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details key={movie.id}>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt={movie.title} />
          </Headline>
          <Awards>
            {movie.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="movie" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

export default MovieDetail;
