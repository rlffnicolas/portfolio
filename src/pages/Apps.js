import React from "react"
import Section from '../components/Section';
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import { motion } from "framer-motion"

const Apps = ({ order }) => {
    const {language} = useLanguage();
    const {apps} = translations;

    const animateProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 2 }
    };

    return (
        <Section order={order}>
            <motion.h1
                key={language}
                {...animateProps}
            >
                {apps[language].title}
            </motion.h1>
        </Section>
    )    
}

export default Apps;