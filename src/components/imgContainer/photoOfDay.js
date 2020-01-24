import React from 'react';
import './middleContent.css';


const PhotoOfTheDay = props => {

    return(
        <div className ='img-container'>
            <img src={props.dailyImg.url} alt='pictures of nebulae,galxies,star clusters,etc'
            />
        </div>
    )
}

export default PhotoOfTheDay