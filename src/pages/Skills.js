import React from "react"
import Section from '../components/Section';
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import { motion } from "framer-motion";

const Skills = ({ order }) => {
    const {language} = useLanguage();
    const {skills} = translations;

    const animateProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 2 }
    };

    return (
        <div>
                <h1>{skills[language].title}</h1>

                <h2>{skills[language].programming.title}</h2>
                <p>{skills[language].programming.content}</p>

                <h2>{skills[language].language.title}</h2>
                <p>{skills[language].language.content}</p>

                <h2>{skills[language].work.title}</h2>
                <p>{skills[language].work.content}</p>
        </div>
    )    
}

export default Skills;