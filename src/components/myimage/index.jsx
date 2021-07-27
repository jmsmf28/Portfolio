import React from 'react'
import styled from 'styled-components'
import Photo from '../../assets/pictures/pic_small.jpg'


const MyPhoto = styled.img`
    width: 8em;
    height: 8em;
    border-radius: 50%;
    object-fit: contain;
`;

export function MyImage() {
    return (
        <div>
            <MyPhoto src={Photo} />
        </div>
    )
}

