import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const DivStyled = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background-color: #cccccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export const Movie = ({ title, imageSource, linkTo }) => {
  return (
    <DivStyled>
      <h2>{title}</h2>
      <div className="line"></div>
      <Link to={linkTo}>
        <img src={imageSource} alt={imageSource} />
      </Link>
    </DivStyled>
  );
};
