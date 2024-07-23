import React, { useState, useRef, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../deviceSizes";

import BmiCalculator from '../assets/images/apps/bmi-calculator.png';
import Calculator from '../assets/images/apps/calculator.png';
import Card from '../assets/images/apps/card.png';
import Dicee from '../assets/images/apps/dicee.png';
import Divide from '../assets/images/apps/divide.png';
import FlashChat1 from '../assets/images/apps/flash-chat-1.png';
import FlashChat2 from '../assets/images/apps/flash-chat-2.png';
import FlashChat3 from '../assets/images/apps/flash-chat-3.png';
import HackerNews from '../assets/images/apps/hackernews.png';
import ItemFinder from '../assets/images/apps/item-finder.png';
import Todo1 from '../assets/images/apps/todo-1.png';
import Todo2 from '../assets/images/apps/todo-2.png';

const StyledApps = styled.div`
    img {
        width: 100%;
    }

    .app-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
    }

    .app-list .app {
        position: relative;
        padding: 5% 0 30px;
        margin: 30px 1%;
        border-radius: 10px;
        cursor: pointer;
        transition: all 0.5s;
    }

    .app-list .app:hover {
        background-color: rgba(80,50,50,0.1);
        transition: all 0.5s;
    }

    .app-list .app:active {
        box-shadow: inset 5px 5px 2px rgba(80,50,50,0.5);
        transform: translate(-1px, -1px);
    }

    .app-list .app h2 {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
    }

    .app-list .app.row {
        display: flex;
    }

    .app-list .app.row img {
        max-width: 33%;
    }

    .app-list .app.row.two {
        width: 66%;
    }

    .app-list .app.row.two img {
        max-width: 48%;
    }

    .app-list .app.column {
        display: flex;
        width: 30%;
    }

    .description {
        position: fixed;
        width: 100%;
        bottom: 0%;
        left: 0%;
        background-color: rgba(80,50,50);
        border-radius: 10px;
        z-index: 2;
    }

    .description * {
        color: #ede0d4;
        border-color: #ede0d4;
        padding: 0 5%; 
    }

    @media ${devices.tablet} {

    .app-list {
        padding-bottom: 30%;
    }

        .app-list .app {
            margin: 0 1%;
            padding: 12% 0 30px;
        }

        h2 {
            font-size: 4vw;
        }

        .description {
            bottom: 12%;
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

const Apps = () => {

    const {language} = useLanguage();
    const {apps} = translations;
    const [descriptionAnimation, setDescriptionAnimation] = useState(false);

    const [selectedApp, setSelectedApp] = useState(null);
    const appDetails = [
        { title: apps[language].appDetails[0].title, images: [FlashChat1, FlashChat2, FlashChat3], description: apps[language].appDetails[0].description },
        { title: apps[language].appDetails[1].title, images: [Todo1, Todo2], description: apps[language].appDetails[1].description },
        { title: apps[language].appDetails[2].title, images: [BmiCalculator], description: apps[language].appDetails[2].description },
        { title: apps[language].appDetails[3].title, images: [Calculator], description: apps[language].appDetails[3].description },
        { title: apps[language].appDetails[4].title, images: [Card], description: apps[language].appDetails[4].description },
        { title: apps[language].appDetails[5].title, images: [Dicee], description: apps[language].appDetails[5].description },
        { title: apps[language].appDetails[6].title, images: [Divide], description: apps[language].appDetails[6].description },
        { title: apps[language].appDetails[7].title, images: [HackerNews], description: apps[language].appDetails[7].description },
        { title: apps[language].appDetails[8].title, images: [ItemFinder], description: apps[language].appDetails[8].description },
    ];

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    const scrollRef = useRef(null)

    useEffect(() => {
        setSelectedApp(false)
    }, [language])

    return (
        <StyledApps>
            <motion.h1
                key={language}
                {...animateProps}
                custom={0}
            >
                {apps[language].title}
            </motion.h1>

            <div className="app-list row" ref={scrollRef} style={{ overflowY: "scroll", overflowX: "hidden" }}>
                {appDetails.map((app, index) => (
                    <div
                        key={index}
                        className={`app ${app.images.length > 1 ? 'row' : 'column'} ${app.images.length < 3 ? 'two' : ''}`}
                        onClick={() => {
                            setSelectedApp(app)
                            setDescriptionAnimation(!descriptionAnimation)
                        }}
                    >
                        <motion.h2
                            key={language}
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{duration: 1}}
                            viewport={{ once: false }}    
                        >{app.title}</motion.h2>
                        {app.images.map((image, imgIndex) => (
                            <motion.img initial={{ opacity: 0, transform: `translateX(100%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }}
                            whileInView={{ opacity: 1, transform: 'translateX(0) scale(1)' }}
                            transition={{duration: 0.8}}
                            viewport={{ once: false }} key={imgIndex} src={image} alt={app.title}
                            />
                        ))}
                    </div>
                ))}
            </div>

            {selectedApp && (
                <motion.div key={selectedApp.title} {...animateProps} className="description">
                    <motion.h2 key={`${selectedApp.title}-title`} {...animateProps}>{selectedApp.title}</motion.h2>
                    <motion.p key={`${selectedApp.title}-description`} {...animateProps}>{selectedApp.description}</motion.p>
                </motion.div>
            )}
        </StyledApps>

        
    )    
    
   
}

export default Apps;