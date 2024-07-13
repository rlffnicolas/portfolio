import React from "react"
import Section from '../components/Section';
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import Photo from "../assets/images/portrait.jpg";
import { motion } from "framer-motion"
import styled from 'styled-components';

const StyledAbout = styled.div`
    .section {
        display: flex;
        justify-content: space-around;
        width: 100%;
        align-items: center;
        height: 100vh;
    }

    .block {
        width: 250px;
        height: 250px;
        padding: 60px;
        background-color: peachpuff;
    }

    .container {
        width: 500px;
    }

    img {
        width: 30%;
        height: intrinsic !important;
        height: fit-content;
    }

    img.round {
        border-radius: 50%;
    }

    .row p {
        width: 70%;
    }

    .row img {
        width: 30%;
    }
`

const About = ({ order }) => {
    const {language} = useLanguage();
    const {about} = translations;

    const mainWithLineBreak = about[language].main.replace(/\n/g, '<br>');

    const animateProps = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        transition: { duration: 2 }
    };

    return (
        <Section order={order}>
            <StyledAbout>
                <motion.h1
                    key={language}
                    {...animateProps}
                >
                    {about[language].title}
                </motion.h1>
                
                <div className="row">
                    <motion.p 
                        key={language}
                        {...animateProps}
                        dangerouslySetInnerHTML={{ __html: mainWithLineBreak }}
                    ></motion.p>
                    <motion.img
                        className="round"
                        src={Photo}
                        initial={{ rotateY: 0 }}
                        animate={{ rotateY: 360 }}
                        transition={{ duration: 2 }}
                    />
                </div>
            </StyledAbout>
        </Section>
    )    
}

export default About;