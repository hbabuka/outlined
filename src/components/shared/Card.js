import React from "react";

export const Card = ({ imageSource, title, description }) => {
  return (
    <div className="card">
      <div className="icon">
        <img src={imageSource} alt="svg icon" />
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};
