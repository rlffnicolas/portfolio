import React, { useState } from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";

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

    .app-list .app.row.two {
        width: 66%;
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
        { title: 'Flash Chat', images: [FlashChat1, FlashChat2, FlashChat3], description: 'Flash Chat is a real-time chat application.' },
        { title: 'Todo', images: [Todo1, Todo2], description: 'Todo is a task management application to keep track of your daily tasks.' },
        { title: 'BMI Calculator', images: [BmiCalculator], description: 'BMI Calculator helps you calculate your Body Mass Index.' },
        { title: 'Calculator', images: [Calculator], description: 'Calculator is a simple arithmetic calculator.' },
        { title: 'Card', images: [Card], description: 'Card is a digital business card application.' },
        { title: 'Dicee', images: [Dicee], description: 'Dicee is a digital dice rolling app.' },
        { title: 'Divide', images: [Divide], description: 'Divide is an app to help you with division calculations.' },
        { title: 'Hacker News', images: [HackerNews], description: 'Hacker News is an app to browse news from Hacker News.' },
        { title: 'Item Finder', images: [ItemFinder], description: 'Item Finder helps you find items in your inventory.' },
    ];

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    return (
        <StyledApps>
            <h1>
                {apps[language].title}
            </h1>

            <div className="app-list row">
                {appDetails.map((app, index) => (
                    <div
                        key={index}
                        className={`app ${app.images.length > 1 ? 'row' : 'column'} ${app.images.length < 3 ? 'two' : ''}`}
                        onClick={() => {
                            setSelectedApp(app)
                            setDescriptionAnimation(!descriptionAnimation)
                        }}
                    >
                        <h2>{app.title}</h2>
                        {app.images.map((image, imgIndex) => (
                            <img key={imgIndex} src={image} alt={app.title} />
                        ))}
                    </div>
                ))}
            </div>

            {selectedApp && (
                <motion.div key={descriptionAnimation} {...animateProps} className="description">
                    <motion.h2 key={descriptionAnimation} {...animateProps}>{selectedApp.title}</motion.h2>
                    <motion.p key={descriptionAnimation} {...animateProps}>{selectedApp.description}</motion.p>
                </motion.div>
            )}
        </StyledApps>
    )    

   
}

export default Apps;