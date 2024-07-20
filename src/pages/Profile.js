import React from "react"
import Section from '../components/Section';
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';

const Profile = () => {

    const { language } = useLanguage(); 
    const { profile } = translations;

    const profilePresentation = profile[language].presentation.replace(/\n/g, '<br>');
    const profileStudiesContent = profile[language].studies.content.replace(/\n/g, '<br>');
    const profileWorkContent = profile[language].work.content.replace(/\n/g, '<br>');
    const profileDiplomasContent = profile[language].diplomas.content.replace(/\n/g, '<br>');

    return (
        <Section>
            <h1>{profile[language].title}</h1>
            <p dangerouslySetInnerHTML={{ __html: profilePresentation }}></p>

            <h2>{profile[language].studies.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: profileStudiesContent }}></p>

            <h2>{profile[language].work.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: profileWorkContent }}></p>

            <h2>{profile[language].diplomas.title}</h2>
            <p dangerouslySetInnerHTML={{ __html: profileDiplomasContent }}></p>
        </Section>
    )    
}

export default Profile;