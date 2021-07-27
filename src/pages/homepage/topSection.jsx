import React from 'react'
import styled from 'styled-components'

import BackgroundImg from '../../assets/pictures/pic.jpg'
import { MyImage } from '../../components/myimage';
import { theme } from "../../theme.js"
import { Marginer } from "../../components/marginer";
import { Button } from "../../components/button"
import { DownArrow } from "../../components/downArrow";
import { Navbar } from "../../components/navbar";

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: ${theme.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: rgb(250, 246, 246); */
    /*background-image: url(${BackgroundImg});*/ 
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.88);
`;

const DownArrowContainer = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
`;


export function TopSection(props) {
   /*  const scrollToNextSection = () => {
        scroller.scrollTo("servicesSection", { smooth: true, duration: 1500 });
    }; */

    return (
        <TopContainer>
            <Navbar />
            <Marginer direction="vertical" margin="8em" />
            <MyImage />
            <Marginer direction="vertical" margin="2em" />
            <Button>Start</Button>
            <Marginer direction="vertical" margin="8em" />
            <DownArrowContainer>
                <DownArrow />
            </DownArrowContainer>
        </TopContainer>
    )
}

