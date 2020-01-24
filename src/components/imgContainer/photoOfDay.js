import React from 'react';
import './middleContent.css';
import styled from 'styled-components';




const CardDiv = styled.div `
background:#0d0d0d;
margin:3% 5%;
border-radius:15px;
border:5px,solid,#778899
`;

const ImgTag = styled.img `
padding:3% 0;
border-radius:15px;
border:5px,solid,#F0F8FF;

`


const PhotoOfTheDay = props => {

    return(
        <CardDiv className ='img-container'>
            <ImgTag src={props.dailyImg.url} alt='pictures of nebulae,galaxies,star clusters,etc'></ImgTag>
        </CardDiv>
    )
}

export default PhotoOfTheDay