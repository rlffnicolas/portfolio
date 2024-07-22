import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledProfile = styled.div`

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

const Profile = () => {

    const { language } = useLanguage(); 
    const { profile } = translations;

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    const profilePresentation = profile[language].presentation.replace(/\n/g, '<br>');
    const profileStudiesContent = profile[language].studies.content.replace(/\n/g, '<br>');
    const profileWorkContent = profile[language].work.content.replace(/\n/g, '<br>');
    const profileDiplomasContent = profile[language].diplomas.content.replace(/\n/g, '<br>');

    return (
        <StyledProfile>

            <motion.div key={language}>
                <motion.h1
                    {...animateProps}
                    custom={0}
                    >{profile[language].title}</motion.h1>
                <motion.p 
                    {...animateProps}
                    custom={0.25}
                    dangerouslySetInnerHTML={{ __html: profilePresentation }}></motion.p>

                <motion.h2
                    {...animateProps}
                    custom={0.5}
                    >{profile[language].studies.title}</motion.h2>
                <motion.p 
                    {...animateProps}
                    custom={0.75}
                    dangerouslySetInnerHTML={{ __html: profileStudiesContent }}></motion.p>

                <motion.h2
                    {...animateProps}
                    custom={1}
                    >{profile[language].work.title}</motion.h2>
                <motion.p 
                    {...animateProps}
                    custom={1.25}
                    dangerouslySetInnerHTML={{ __html: profileWorkContent }}></motion.p>

                <motion.h2
                    {...animateProps}
                    custom={1.5}
                    >{profile[language].diplomas.title}</motion.h2>
                <motion.p 
                    {...animateProps}
                    custom={1.75}
                    dangerouslySetInnerHTML={{ __html: profileDiplomasContent }}></motion.p>
            </motion.div>   

        </StyledProfile>
    )    
}

export default Profile;