import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import Photo from "../assets/images/portrait.jpg";
import styled from 'styled-components';
import { motion } from "framer-motion";
import AnimatedImage from "../components/AnimatedImage";
import { devices } from "../deviceSizes";

const StyledAbout = styled.div`

    .row {
        display: flex;
    }

    .row p {
        width: 70%;
    }

    .row .col {
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    @media ${devices.tablet} {
        .row p {
            width: 90%;
            padding-bottom: 50px;
        }

        img {
            opacity: 0.4 !important;
        }
    }

`

const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
      },
    }),
  };

const About = () => {
    const {language} = useLanguage();
    const {about} = translations;

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    return (
        <StyledAbout>
            
                <motion.h1
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={variants}
                    custom={0}
                    key={language}
                >
                    {about[language].title}
                </motion.h1>
                
                <div className="row">
                    <motion.div key={language} className="col">
                        <motion.p {...animateProps} custom={0.5}>{about[language].line1}</motion.p>
                        <motion.p {...animateProps} custom={1}>{about[language].line2}</motion.p>
                        <motion.p {...animateProps} custom={1.5}>{about[language].line3}</motion.p>
                        <motion.p {...animateProps} custom={2}>{about[language].line4}</motion.p>
                        <motion.p {...animateProps} custom={2.5}>{about[language].line5}</motion.p>
                        <motion.p {...animateProps} custom={3}>{about[language].line6}</motion.p>
                        <motion.p {...animateProps} custom={3.5}>{about[language].line7}</motion.p>
                        <motion.p {...animateProps} custom={4}>{about[language].line8}</motion.p>
                        <motion.p {...animateProps} custom={4.5}>{about[language].line9}</motion.p>
                        <motion.p {...animateProps} custom={5}>{about[language].line10}</motion.p>
                        <motion.p {...animateProps} custom={5.5}>{about[language].line11}</motion.p>
                    </motion.div>
                    <AnimatedImage />
                </div>

                <br/>
                <br/>
                <br/>
                <br/>
        </StyledAbout>
    )    
}

export default About;