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

    .app-list .app h2 {
        position: absolute;
        top: 0;
        width: 100%;
        text-align: center;
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
        width: 77%;
        bottom: 2%;
        left: 20%;
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

const Apps = () => {

    const {language} = useLanguage();
    const {apps} = translations;

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

    return (
        <StyledApps>
            <motion.h1>
                {apps[language].title}
            </motion.h1>

            <div className="app-list row">
                {appDetails.map((app, index) => (
                    <div
                        key={index}
                        className={`app ${app.images.length > 1 ? 'row' : 'column'} ${app.images.length < 3 ? 'two' : ''}`}
                        onClick={() => setSelectedApp(app)}
                    >
                        <h2>{app.title}</h2>
                        {app.images.map((image, imgIndex) => (
                            <img key={imgIndex} src={image} alt={app.title} />
                        ))}
                    </div>
                ))}
            </div>

            {selectedApp && (
                <div className="description">
                    <h2>{selectedApp.title}</h2>
                    <p>{selectedApp.description}</p>
                </div>
            )}
        </StyledApps>
    )    

   
}

export default Apps;