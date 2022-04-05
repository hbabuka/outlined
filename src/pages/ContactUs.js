import React from "react";
import { motion } from "framer-motion";
import { pageAnimation, titleAnimation } from "../animation";
import styled from "styled-components";
import { Social } from "../components/shared/Social";

const ContactStyled = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
`;

const TitleStyled = styled.div`
  margin-bottom: 4rem;
  color: black;
`;

const Hide = styled.div`
  overflow: hidden;
`;

const labelsData = ["Send us a Message", "Send and Email", "Social Media"];

const ContactUs = () => {
  return (
    <ContactStyled
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ backgroundColor: "#fff" }}
    >
      <TitleStyled>
        <Hide>
          <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
        </Hide>
      </TitleStyled>
      {labelsData.map((item) => {
        return <Social label={item} key={item} />;
      })}
    </ContactStyled>
  );
};

export default ContactUs;
