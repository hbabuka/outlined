import React from "react";
import home1 from "../../images/home1.png";
import { Shared } from "../../styles/shared";

const AboutSection = () => {
  return (
    <Shared.Section.Wrapper>
      <Shared.Section.Description>
        <div className="title">
          <Shared.Section.Hide>
            <h2>We work to make</h2>
          </Shared.Section.Hide>
          <Shared.Section.Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Shared.Section.Hide>
          <Shared.Section.Hide>
            <h2>true</h2>
          </Shared.Section.Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Shared.Section.Description>
      <Shared.Section.Image>
        <img src={home1} alt="guy with a camera" />
      </Shared.Section.Image>
    </Shared.Section.Wrapper>
  );
};

export default AboutSection;
