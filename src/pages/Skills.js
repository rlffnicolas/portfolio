import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";
import { MaterialSymbol } from 'react-material-symbols';
import { devices } from "../deviceSizes";

const StyledSkills = styled.div`
    height: 100%;
    position: relative;

    .icon-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    h2 {
        margin-top: 50px;
    }

    h3 {
        margin-bottom: 0;
    }

    p {
        margin: 0;
    }

    @media ${devices.tablet} {
        p {
            width: 90%;
        }

        .container {
            padding: 10% 0 50px;
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
                initial={{ rotate: 380, scale: 0, position: 'fixed', fontSize: '60vw', opacity: 0}}
                animate={{ rotate: 0, scale: 1, opacity: 0.1, top: '-20%' }}
                transition={{
                    type: "spring",
                    stiffness: 250,
                    damping: 28}}
            >
                
                <MaterialSymbol className="settings-icon" icon="done" />
            </motion.div>

            <motion.div className="container" key={language}>

                <motion.h1
                    {...animateProps}
                    custom={0}
                >{skills[language].title}</motion.h1>

                <motion.h2
                    key="os-title"
                    {...animateProps}
                    custom={0.25}
                >{skills[language].os.title}</motion.h2>
                <motion.ul
                    key="os-list"
                    {...animateProps}
                    custom={0.5}
                >
                    {skills[language].os.content.map((content, index) => {
                        return (
                            <li key={index}>
                                <h3>{content.title}</h3>
                                <p>{content.duration}</p>
                                <p>{content.content}</p>
                            </li>
                        )
                    })}
                </motion.ul>

                <motion.h2
                    key="programming-title"
                    {...animateProps}
                    custom={0.75}
                >{skills[language].programming.title}</motion.h2>
                <motion.ul
                    key="programming-list"
                    {...animateProps}
                    custom={1}
                >
                    {skills[language].programming.content.map((content, index) => {
                        return (
                            <li key={index}>
                                <h3>{content.title}</h3>
                                <p>{content.duration}</p>
                                <p>{content.content}</p>
                            </li>
                        )
                    })}
                </motion.ul>

                <motion.h2
                    key="framework-title"
                    {...animateProps}
                    custom={1.25}
                >{skills[language].framework.title}</motion.h2>
                <motion.ul
                    key="framework-list"
                    {...animateProps}
                    custom={1.5}
                >
                    {skills[language].framework.content.map((content, index) => {
                        return (
                            <li key={index}>
                                <h3>{content.title}</h3>
                                <p>{content.duration}</p>
                                <p>{content.content}</p>
                            </li>
                        )
                    })}
                </motion.ul>

                <motion.h2
                    key="db-title"
                    {...animateProps}
                    custom={1.75}
                >{skills[language].DB.title}</motion.h2>
                <motion.ul
                    key="db-list"
                    {...animateProps}
                    custom={2}
                >
                    {skills[language].DB.content.map((content, index) => {
                        return (
                            <li key={index}>
                                <h3>{content.title}</h3>
                                <p>{content.duration}</p>
                                <p>{content.content}</p>
                            </li>
                        )
                    })}
                </motion.ul>

                <motion.h2
                    key="languages-title"
                    {...animateProps}
                    custom={2.25}
                >{skills[language].languages.title}</motion.h2>
                <motion.ul
                    key="languages-list"
                    {...animateProps}
                    custom={2.5}
                >
                    {skills[language].languages.content.map((content, index) => {
                        return (
                            <li key={index}>
                                <h3>{content.title}</h3>
                                <p>{content.duration}</p>
                                <p>{content.content}</p>
                            </li>
                        )
                    })}
                </motion.ul>

                <motion.h2
                    key="workskills-title"
                    {...animateProps}
                    custom={2.75}
                >{skills[language].workskills.title}</motion.h2>
                <motion.ul
                    key="workskills-list"
                    {...animateProps}
                    custom={3}
                >
                    {skills[language].workskills.content.map((content, index) => {
                        return (
                            <li key={index}>
                                <h3>{content.title}</h3>
                                <p>{content.duration}</p>
                                <p>{content.content}</p>
                            </li>
                        )
                    })}
                </motion.ul>
                
            </motion.div>
        </StyledSkills>
    )    
}

export default Skills;