import React from "react"
import Section from '../components/Section';
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';

const Skills = () => {
    const {language} = useLanguage();
    const {skills} = translations;

    return (
        <Section>
                <h1>{skills[language].title}</h1>

                <h2>{skills[language].programming.title}</h2>
                <p>{skills[language].programming.content}</p>

                <h2>{skills[language].language.title}</h2>
                <p>{skills[language].language.content}</p>

                <h2>{skills[language].work.title}</h2>
                <p>{skills[language].work.content}</p>
        </Section>
    )    
}

export default Skills;