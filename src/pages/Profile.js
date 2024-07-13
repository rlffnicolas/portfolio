import React from "react"
import Section from '../components/Section';
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import { motion } from "framer-motion";

const Profile = ({ order }) => {

    const { language } = useLanguage(); 
    const { profile } = translations;

    const animateProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 2 }
    };

    return (
        <Section order={order}>
            <motion.div
                key={language}
                {...animateProps}    
            >
                <h1>{profile[language].title}</h1>

                <h2>{profile[language].studies.title}</h2>
                <p>{profile[language].studies.content}</p>

                <h2>{profile[language].work.title}</h2>
                <p>{profile[language].work.content}</p>

                <h2>{profile[language].diplomas.title}</h2>
                <p>{profile[language].diplomas.content}</p>
            </motion.div>
        </Section>
    )    
}

export default Profile;