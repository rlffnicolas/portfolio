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
        <StyledAbout>
            <h1>
                {about[language].title}
            </h1>
            
            <div className="row">
                <p dangerouslySetInnerHTML={{ __html: mainWithLineBreak }}></p>
                <img
                    className="round"
                    src={Photo} />
            </div>
        </StyledAbout>
    )    
}

export default About;