import React from 'react';
import './middleContent.css';


const PhotoOfTheDay = props => {

    return(
        <div className ='img-container'>
            <img src={props.dailyImg.url}
            />
        </div>
    )
}

export default PhotoOfTheDay