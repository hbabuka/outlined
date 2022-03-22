import React from "react";
import home1 from "../../images/home1.png";
import { Shared } from "../../styles/shared";
import { motion } from "framer-motion";
import { titleAnimation, fade, photoAnimation } from "../../animation";

const AboutSection = () => {
  return (
    <Shared.Section.Wrapper>
      <Shared.Section.Description>
        <motion.div>
          <Shared.Section.Hide>
            <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
          </Shared.Section.Hide>
          <Shared.Section.Hide>
            <motion.h2 variants={titleAnimation}>
              your <span>dreams</span> come
            </motion.h2>
          </Shared.Section.Hide>
          <Shared.Section.Hide>
            <motion.h2 variants={titleAnimation}>true</motion.h2>
          </Shared.Section.Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Shared.Section.Description>
      <Shared.Section.Image>
        <motion.img
          src={home1}
          alt="guy with a camera"
          variants={photoAnimation}
        />
      </Shared.Section.Image>
    </Shared.Section.Wrapper>
  );
};

export default AboutSection;
