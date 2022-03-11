import React from "react";
import { Card } from "../shared/Card";
import home2 from "../../images/home2.png";
import { cardDetails } from "../../data";
import { Shared } from "../../styles/shared";
import styled from "styled-components";

const ServicesStyled = styled(Shared.Section.Wrapper)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 4rem;
  }
`;

const CardsStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ServicesSection = () => {
  return (
    <ServicesStyled>
      <Shared.Section.Description>
        <h2>
          High <span>quality</span> services
        </h2>
        <CardsStyled>
          {cardDetails.map((card) => {
            return (
              <Card
                imageSource={card.icon}
                title={card.title}
                description={card.description}
                key={card.id}
              />
            );
          })}
        </CardsStyled>
      </Shared.Section.Description>
      <Shared.Section.Image>
        <img src={home2} alt="a camera device in focus" />
      </Shared.Section.Image>
    </ServicesStyled>
  );
};

export default ServicesSection;
