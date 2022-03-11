import React from "react";
import { Card } from "./shared/Card";
import home2 from "../images/home2.png";
import { cardDetails } from "../data";

const ServicesSection = () => {
  return (
    <div>
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          {cardDetails.map((card) => {
            return (
              <Card
                imageSource={card.icon}
                title={card.title}
                description={card.description}
              />
            );
          })}
        </div>
      </div>
      <div className="image">
        <img src={home2} alt="a camera device in focus" />
      </div>
    </div>
  );
};

export default ServicesSection;
