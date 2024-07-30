import React, { useState, useRef, useEffect } from "react"
import { useLanguage } from "../contexts/LanguageContext";
import translations from '../translations.json';
import styled from "styled-components";
import { motion } from "framer-motion";
import { devices } from "../deviceSizes";
import { useTheme } from "../contexts/ThemeContext";
import useCheckMobileScreen from "../hooks/useCheckMobileScreen";
import { MaterialSymbol } from 'react-material-symbols';


import DayPlan2 from '../assets/images/apps/dayplan-2.png';
import DayPlan4 from '../assets/images/apps/dayplan-4.png';
import DayPlan5 from '../assets/images/apps/dayplan-5.png';
import DayPlan6 from '../assets/images/apps/dayplan-6.png';
import BmiCalculator from '../assets/images/apps/bmi-calculator.png';
import Calculator from '../assets/images/apps/calculator.png';
import Dicee from '../assets/images/apps/dicee.png';
import Divide from '../assets/images/apps/divide.png';
import FlashChat1 from '../assets/images/apps/flash-chat-1.png';
import FlashChat2 from '../assets/images/apps/flash-chat-2.png';
import FlashChat3 from '../assets/images/apps/flash-chat-3.png';
import HackerNews from '../assets/images/apps/hackernews.png';
import ItemFinder from '../assets/images/apps/item-finder.png';
import Todo1 from '../assets/images/apps/todo-1.png';
import Todo2 from '../assets/images/apps/todo-2.png';
import ColorPicker from '../assets/images/apps/colorpicker.png';

const StyledApps = styled.div`
    max-width: 1000px;
    margin: 0 auto;

   img {
        width: 100%;
   }

    .category {
        display: flex;
        flex-wrap: wrap;
        margin-top: 50px;
    }

    .category .app {
        width: 100%;
        margin: 10px 0;
        background-color: rgba(255,255,255,0.1);
        border-radius: 30px;
        padding: 2%;
    }

    .category .app.half {
        width: 43%;
        margin: 10px 1%;
    }

    .category .app .images {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
    }

    .category .app .images .image {
        width: 50%;
    }

    .category .app .images.three .image {
        width: 33%;
    }

    .category .app.half .images .image {
        width: 100%;
    }

    @media ${devices.tablet} { 
        .category .app.half {
            width: 100%;
            margin: 10px 0;
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

    const imageUrls = [
        DayPlan2,
        DayPlan4,
        DayPlan5,
        DayPlan6,
        BmiCalculator,
        Calculator,
        Dicee,
        Divide,
        FlashChat1,
        FlashChat2,
        FlashChat3,
        HackerNews,
        ItemFinder,
        Todo1,
        Todo2,
        ColorPicker,
      ];
    
    const preloadImages = (urls) => {
        return Promise.all(
          urls.map((url) => {
            return new Promise((resolve, reject) => {
              const img = new Image();
              img.src = url;
              img.onload = resolve;
              img.onerror = reject;
            });
          })
        );
      };

    const {language} = useLanguage();
    const {apps} = translations;
    const {theme} = useTheme();
    const [loading, setLoading] = useState(true);
    const isMobile = useCheckMobileScreen();

    const animateProps = {
        initial: "hidden",
        animate: "visible",
        variants: variants
    };

    const animatePropsFromRight = {
        whileInView: { opacity: 1, transform: 'translateX(0) scale(1)' },
        transition: {duration: 0.8},
        viewport: { once: false }
    };

    useEffect(() => {
        preloadImages(imageUrls)
          .then(() => {
            setLoading(false);
          })
          .catch((err) => {
            console.error('Failed to load images', err);
          });
      }, []);

    const scrollRef = useRef(null)

    if (loading) {
        return (
            <motion.div 
                className="icon-container"
                initial={{ translateX: '-100%', fontSize: '70vw', opacity: '0.1'}}
                animate={{ translateX: '100%', }}
                transition={{duration: 4}}
            >
                <MaterialSymbol className="settings-icon" icon="arrow_forward" />
            </motion.div>
        )
      }
 
    return (
        <StyledApps theme={theme}>
            <motion.h1
                key={language}
                {...animateProps}
                custom={0}
            >
                {apps[language].title}
            </motion.h1>

            <div ref={scrollRef}>

                <div className="category">
                    <motion.h2 custom={0.5} key={language} {...animateProps}>
                        {apps[language].appGroups.iosApps.title}
                    </motion.h2>

                    <div className="app">
                        <motion.div key={language}>
                            <motion.h3 custom={1} {...animateProps}>{apps[language].appGroups.iosApps.content.dayPlan.title}</motion.h3>
                            <motion.p custom={1.5} {...animateProps}>{apps[language].appGroups.iosApps.content.dayPlan.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={DayPlan2} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                            <div className="image">
                                <motion.img src={DayPlan4} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                            <div className="image">
                                <motion.img src={DayPlan5} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                            <div className="image">
                                <motion.img src={DayPlan6} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="category">
                    <motion.h2 key={language} {...animateProps}>
                        {apps[language].appGroups.iosTrainingApps.title}
                    </motion.h2>

                    <div className="app">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.flashChat.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.flashChat.description}</motion.p>
                        </motion.div>
                        <div className="images three">
                            <div className="image">
                                <motion.img src={FlashChat1} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                            <div className="image">
                                <motion.img src={FlashChat2} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                            <div className="image">
                                <motion.img src={FlashChat3} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.todo.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.todo.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={Todo1} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                            <div className="image">
                                <motion.img src={Todo2} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app half">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.bmiCalculator.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.bmiCalculator.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={BmiCalculator} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app half">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.calculator.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.calculator.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={Calculator} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app half">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.dicee.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.dicee.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={Dicee} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app half">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.divide.title}</motion.h3>
                            <motion.p>{apps[language].appGroups.iosTrainingApps.content.divide.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={Divide} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app half">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.hackerNews.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.hackerNews.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={HackerNews} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                    <div className="app half">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.itemFinder.title}</motion.h3>
                            <motion.p {...animateProps}>{apps[language].appGroups.iosTrainingApps.content.itemFinder.description}</motion.p>
                        </motion.div>
                        <div className="images">
                            <div className="image">
                                <motion.img src={ItemFinder} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                            </div>
                        </div>
                    </div>

                </div>

                <div className="category">
                    <motion.h2 key={language} {...animateProps}>
                        {apps[language].appGroups.ecSitesCoding.title}
                    </motion.h2>

                    <div className="app">
                        <motion.p key={language} {...animateProps}>
                            {apps[language].appGroups.ecSitesCoding.description}
                        </motion.p>
                    </div>
                </div>

                <div className="category">
                    <motion.h2 key={language} {...animateProps}>
                        {apps[language].appGroups.excelProjects.title}
                    </motion.h2>

                    <div className="app">
                        <motion.p key={language} {...animateProps}>
                            {apps[language].appGroups.excelProjects.description}
                        </motion.p>
                    </div>
                </div>

                <div className="category">
                    <motion.h2 key={language} {...animateProps}>
                        {apps[language].appGroups.reactProjects.title}
                    </motion.h2>

                    <div className="app">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>
                                {apps[language].appGroups.reactProjects.colorPicker.title}
                            </motion.h3>
                            <motion.p {...animateProps}>
                                {apps[language].appGroups.reactProjects.colorPicker.description}
                            </motion.p>
                        </motion.div>
                        
                        <div className="images">
                            <div className="image">
                                <motion.a href="https://color-picker.orloff-nicolas.com/">
                                    <motion.img src={ColorPicker} {...animatePropsFromRight} initial={{ opacity: 0, transform: `translateX(50%) scale(0.8) rotate(${Math.random() < 0.5 ? 1*50*Math.random()+0.1 : -1*50*Math.random()+0.1}deg)` }} />
                                </motion.a>
                            </div>
                        </div>
                    </div>

                    <div className="app">
                        <motion.div key={language}>
                            <motion.h3 {...animateProps}>
                                {apps[language].appGroups.reactProjects.moneySaver.title}
                            </motion.h3>
                            <motion.p {...animateProps}>
                                {apps[language].appGroups.reactProjects.moneySaver.description}
                            </motion.p>
                        </motion.div>
                    </div>

                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                </div>

            </div>

        </StyledApps>
        
    )    
    
   
}

export default Apps;