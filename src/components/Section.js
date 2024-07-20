import React from "react"
import styled from 'styled-components';
import { devices } from '../deviceSizes';
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const StyledSection = styled.div`
    text-align: center;
    position: fixed;
    border-radius: 10px;
    overflow-y: scroll;
    transition: all 0.5s;

    // padding: ${props => props.$togglenavibar ? '30px 5%' : '30px 5% 30px 10%'};
    // left: ${props => props.$togglenavibar ? '20%' : '0'};
    // width: ${props => props.$togglenavibar ? '68%' : '90%'};
    // top: ${props => props.$togglenavibar ? '2%' : '0'};
    // height: ${props => props.$togglenavibar ? '90vh' : '100vh'};

    * {
        text-align: start;
    }

    img {
        width: 100%;
    }

    p, ul {
        border-left: 2px solid black;
        padding-left: 2%;
    }

    li {
        padding: 10px 0;
        list-style-type: none;
    }

    .row {
        display: flex;
    }

    @media ${devices.tablet} {
        height: 100%;
        left: 0;
        top: 0;
        border-radius: 0;
        transition: all 0.5s;
        padding-top: 10%;
        width: 100%;
    }
`;

const Section = ({children}) => {

    const location = useLocation();

    return ( 
        <StyledSection className="section">
            <motion.div
                key={location.pathname}
                initial={{ translateY: 50, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                exit={{ translateY: 50, opacity: 0 }}
                transition={{ duration: 2 }}
            >
            {children}      
            </motion.div>              
        </StyledSection>
    )    
}

export default Section;