import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import Photo from "../assets/images/portrait.jpg";
import styled from 'styled-components';
import { motion } from "framer-motion";
import AnimatedImage from "../components/AnimatedImage";

const StyledAbout = styled.div`
    .row {
        display: flex;
    }

    .row p {
        width: 70%;
    }

   @property --gap{
  syntax: '<length>';
  inherits: true;
  initial-value: 0;
}
@property --angle{
  syntax: '<angle>';
  inherits: true;
  initial-value: 0deg;
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

    const mainWithLineBreak = about[language].main.replace(/\n/g, '<br>');

    const animateProps = {
        initial: { opacity: 0, transform: 'translateY(-10px)' },
        animate: { opacity: 1, transform: 'translateY(0)' },
        transition: { duration: 0.4 }
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
                    <motion.p 
                        dangerouslySetInnerHTML={{ __html: mainWithLineBreak }}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={variants}
                        custom={1}
                        key={language}
                    ></motion.p>
                        <AnimatedImage />
                </div>
        </StyledAbout>
    )    
}

export default About;