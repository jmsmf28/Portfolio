import React from 'react'
import styled from 'styled-components'

import BackgroundImg from '../../assets/pictures/pic.jpg'
import { MyImage } from '../../components/myimage';
import { theme } from "../../theme.js"

const TopContainer = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0;
    background-color: ${theme.primary};
    /* background-color: rgb(250, 246, 246); */
    /*background-image: url(${BackgroundImg});*/ 
`;

const BackgroundFilter = styled.div`
    width: 100%;
    height: 100%;
    background-color: rgba(53, 53, 53, 0.88);
`;


export function TopSection(props) {
    return (
        <TopContainer>
            <MyImage />
            Boom
        </TopContainer>
    )
}

