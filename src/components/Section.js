import React from "react"
import styled from 'styled-components';
import Motion from '../components/Motion';

const StyledSection = styled.div`
    background-color: rgba(50,50,50,0.1);
    padding: 30px 5%;
    text-align: center;
    width: 67%;
    height: 90vh;
    position: fixed;
    border-radius: 10px;
    overflow-y: scroll;

    * {
        text-align: start;
    }

    img {
        width: 50%;
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
    
`;

const Section = ({ children }) => {

    return (
        <Motion>
            <StyledSection>
                {children}
            </StyledSection>
        </Motion>
    )    
}

export default Section;