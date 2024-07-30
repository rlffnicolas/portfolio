import React from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";
import { MaterialSymbol } from 'react-material-symbols';
import { devices } from "../deviceSizes";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";

const StyledProfile = styled.div`
    height: 100%;
    position: relative;

    h2 {
        margin-top: 70px;
    }

    b {
        font-weight: 500 !important;
        opacity: 0.6;
        font-size: 1.2em;
    }

    .icon-container {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: -1;
    }

    @media ${devices.tablet} {
        p {
            width: 90%;
        }

        .container {
            padding: 0 0 100px;
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

const Profile = () => {

    const isMobile = useCheckMobileScreen();

    const { language } = useLanguage(); 
    const { profile } = translations;

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    const profileStudiesContent = profile[language].studies.content.replace(/\n/g, '<br>');
    const profileWorkContent = profile[language].work.content.replace(/\n/g, '<br>');
    const profileDiplomasContent = profile[language].diplomas.content.replace(/\n/g, '<br>');

    return (
        <StyledProfile>

            <motion.div 
                className="icon-container"
                initial={{ translateX: '100%', position: 'fixed', fontSize: '60vw', opacity: 0}}
                animate={{ translateX: '50%', opacity: 0.1, top: isMobile ? '14%' : '-10%' }}
                transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 28}}
            >
                
                <MaterialSymbol className="settings-icon" icon="work" />
            </motion.div>

            <motion.div className="container" key={language}>
                <motion.h1
                    {...animateProps}
                    custom={0}
                    >{profile[language].title}</motion.h1>

                <motion.h2
                    {...animateProps}
                    custom={1}
                    >{profile[language].studies.title}</motion.h2>
                <motion.p 
                    {...animateProps}
                    custom={1.5}
                    dangerouslySetInnerHTML={{ __html: profileStudiesContent }}></motion.p>

                <motion.h2
                    {...animateProps}
                    custom={2}
                    >{profile[language].work.title}</motion.h2>
                <motion.p 
                    {...animateProps}
                    custom={2.5}
                    dangerouslySetInnerHTML={{ __html: profileWorkContent }}></motion.p>

                <motion.h2
                    {...animateProps}
                    custom={3}
                    >{profile[language].diplomas.title}</motion.h2>
                <motion.p 
                    {...animateProps}
                    custom={3.5}
                    dangerouslySetInnerHTML={{ __html: profileDiplomasContent }}></motion.p>

                    
            </motion.div>  

            <br/>
            <br/>
            <br/>
            <br/> 

        </StyledProfile>
    )    
}

export default Profile;