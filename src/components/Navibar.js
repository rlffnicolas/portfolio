import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import DebouncedLink from './DebouncedLink';
import { ClickableProvider } from '../contexts/ClickableContext';
import { useToggleNavibar } from '../contexts/ToggleNavibarContext';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import translations from '../translations.json';
import { devices } from '../deviceSizes';
import Switch from '@mui/material/Switch';

const mobileCheck = () => {
  let check = false;
  (function(a) {
    if (/android|bb\d+|meego.+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-a|w)|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-([2-7]|i-))|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(a.substr(0, 4))) {
      check = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return check;
};

const StyledNavibar = styled.div`
  position: fixed;
  top: 2%;
  z-index: 2;
  width: 18%;
  height: 96vh;
  transition: all 0.5s;
  padding-top: 10%;

  left: ${props => props.$togglenavibar ? '0' : '-15%'}; 
  opacity: ${props => props.$togglenavibar ? '1' : '0'}; 
  
  h1 {
    text-align: start;
    font-size: 26px;
    margin-left: 40px;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 10px 50px 10px 30px;
  }

  ul.row {
    flex-direction: row;
  }

  li {
    list-style-type: none;
    text-align: start;
  }

  button {
    background-color: rgba(200, 200, 200, 0.2);
    border: none;
    transition: background-color 0.5s;
    border-radius: 50%;
    cursor: pointer;
    font-size: 20px;
    padding: 3px 6px;
    margin: 0 5px;
  }

  button:hover {
    background-color: rgba(200, 200, 200, 0.6);
    transition: all 0.5s;
  }

  a {
    text-decoration: none;
    width: 100%;
    display: block;
    padding: 10px;
    border-radius: 10px;
  }

  a:hover {
    background-color: rgba(200, 200, 200, 0.5);
  }

  @media ${devices.tablet} {
    width: 40%;
    background-color: ${props => props.theme === 'light' ? '#ede0d4' : '#000'};
    left: 0;
    top: 0;
    padding-top: 15%;
  }

`;



const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 64,
  height: 34,
  padding: 7,
  marginLeft: 30,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(0)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(26px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&::before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));



const Navibar = () => {
  const [activeLink, setActiveLink] = useState(null);
  const { language, changeLanguage } = useLanguage();
  const { theme, changeTheme } = useTheme();
  const { toggleNavibar, setToggleNavibar } = useToggleNavibar();
  const { navibar } = translations;

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

  let checked;
  if (theme == 'light') {
    checked = false;
  } else {
    checked = true;
  }

  function handleChangeTheme() {
    if (theme == 'light') {
      changeTheme('dark')
      checked = true;
    } else {
      changeTheme('light')
      checked = false;
    }
  }

  return (
    <StyledNavibar theme={theme} $togglenavibar={toggleNavibar} >
      <ClickableProvider>

          <motion.h1
            key={language}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            custom={0}
          >
            {navibar[language].name}
          </motion.h1>

        <ul>
          {['/about', '/profile', '/skills', '/apps'].map((path, index) => (
            <motion.li
              key={path}
              custom={index}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              <DebouncedLink
                to={path}
                isActive={activeLink === path}
                onClick={() => {
                  setActiveLink(path);
                  if (mobileCheck()) {
                    setToggleNavibar(!toggleNavibar)
                  }
                }}
              >
                <motion.div key={language} initial={{opacity: 0}} 
                animate={{ opacity: 1 }} 
                transition={{duration: 2}}>
                {navibar[language].menu[path.substring(1)]}
                </motion.div> 
              </DebouncedLink>
            </motion.li>
          ))}
        </ul>

        <br />

        <ul className="row">
          {['jp', 'en', 'fr'].map((lang, index) => (
            <motion.li
              key={lang}
              custom={index + 4}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={variants}
            >
              <button onClick={() => {
                changeLanguage(lang);
                if (mobileCheck()) {
                  setToggleNavibar(!toggleNavibar)
                }
                }}>
                {lang === 'jp' ? '🇯🇵' : lang === 'en' ? '🇬🇧' : '🇫🇷'}
              </button>
            </motion.li>
          ))}
        </ul>

        <MaterialUISwitch onChange={handleChangeTheme} checked={checked} />
        
      </ClickableProvider>
    </StyledNavibar>
  );
};


export default Navibar;
