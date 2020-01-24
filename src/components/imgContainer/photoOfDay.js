import React from 'react';
import './middleContent.css';
import styled from 'styled-components';




const CardDiv = styled.div `
background:black;
margin:3% 5%;
border-radius:15px;
`;

const IMG = styled.img `
padding:3% 0;

`


const PhotoOfTheDay = props => {

    return(
        <CardDiv className ='img-container'>
            <IMG src={props.dailyImg.url} alt='pictures of nebulae,galxies,star clusters,etc'
            />
        </CardDiv>
    )
}

export default PhotoOfTheDay