import React from "react";
import home1 from "../images/home1.png";
import styled from "styled-components";

const AboutStyled = styled.div`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;

const DescriptionStyled = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;

const ImageStyled = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

const HideStyled = styled.div`
  overflow: hidden;
`;

const AboutSection = () => {
  return (
    <AboutStyled>
      <DescriptionStyled>
        <div className="title">
          <HideStyled>
            <h2>We work to make</h2>
          </HideStyled>
          <HideStyled>
            <h2>
              your <span>dreams</span> come
            </h2>
          </HideStyled>
          <HideStyled>
            <h2>true</h2>
          </HideStyled>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </DescriptionStyled>
      <ImageStyled>
        <img src={home1} alt="guy with a camera" />
      </ImageStyled>
    </AboutStyled>
  );
};

export default AboutSection;
