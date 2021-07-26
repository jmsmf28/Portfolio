import React from 'react'
import styled from 'styled-components'
import Photo from '../../assets/pictures/pic_small.jpg'


const MyPhoto = styled.img`
    width: 4em;
    height: 4em;
    border-radius: 50%;
    background-image: url(${Photo}); 
`;


export function MyImage() {
    return (
        <div>
            <MyPhoto />
        </div>
    )
}

