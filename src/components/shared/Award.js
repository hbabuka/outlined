import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 50%;
    background-color: #23d997;
    height: 0.5rem;
    margin: 1rem 0;
  }
  p {
    padding: 2rem 0;
  }
`;

export const Award = ({ title, description }) => {
  return (
    <DivStyled>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </DivStyled>
  );
};
