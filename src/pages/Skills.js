import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";

const StyledSkills = styled.div`

`

const Skills = () => {
    const {language} = useLanguage();
    const {skills} = translations;

    const animateProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 2 }
    };

    return (
        <StyledSkills>
                <h1>{skills[language].title}</h1>

                <h2>{skills[language].programming.title}</h2>
                <p>{skills[language].programming.content}</p>

                <h2>{skills[language].language.title}</h2>
                <p>{skills[language].language.content}</p>

                <h2>{skills[language].work.title}</h2>
                <p>{skills[language].work.content}</p>
        </StyledSkills>
    )    
}

export default Skills;