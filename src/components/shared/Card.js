import React from "react";
import styled from "styled-components";

const DivStyled = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`;

export const Card = ({ imageSource, title, description }) => {
  return (
    <DivStyled>
      <div className="icon">
        <img src={imageSource} alt="svg icon" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </DivStyled>
  );
};
