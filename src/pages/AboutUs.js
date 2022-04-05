import React from "react";
import AboutSection from "../components/sections/AboutSection";
import FaqSection from "../components/sections/FaqSection";
import ServicesSection from "../components/sections/ServicesSection";
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";
import ScrollToTop from "../components/shared/ScrollToTop";

const AboutUs = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollToTop />
    </motion.div>
  );
};

export default AboutUs;
