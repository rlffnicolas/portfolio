import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";
import { MaterialSymbol } from 'react-material-symbols';

const StyledSkills = styled.div`
    height: 100%;
    overflow: hidden;
    position: relative;

    .icon-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
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

            <motion.div 
                className="icon-container"
                initial={{ rotate: 380, scale: 0, position: 'fixed', fontSize: '80vw', opacity: 0}}
                animate={{ rotate: 0, scale: 1, opacity: 0.1, top: '14%' }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 28}}
            >
                
                <MaterialSymbol className="settings-icon" icon="done" />
            </motion.div>

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