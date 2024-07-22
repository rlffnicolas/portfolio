import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSkills = styled.div`

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

const Skills = () => {
    const {language} = useLanguage();
    const {skills} = translations;

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    return (
        <StyledSkills>
            <motion.div key={language}>
                <motion.h1
                    {...animateProps}
                    custom={0}
                >{skills[language].title}</motion.h1>

                <motion.h2
                    {...animateProps}
                    custom={0.25}
                >{skills[language].programming.title}</motion.h2>
                <motion.p
                    {...animateProps}
                    custom={0.5}
                >{skills[language].programming.content}</motion.p>

                <motion.h2
                    {...animateProps}
                    custom={0.75}
                >{skills[language].language.title}</motion.h2>
                <motion.p
                    {...animateProps}
                    custom={1}
                >{skills[language].language.content}</motion.p>

                <motion.h2
                    {...animateProps}
                    custom={1.25}
                >{skills[language].work.title}</motion.h2>
                <motion.p
                    {...animateProps}
                    custom={1.5}
                >{skills[language].work.content}</motion.p>
            </motion.div>
        </StyledSkills>
    )    
}

export default Skills;