import React from "react";
import './middleContent.css';
import Explanation from './explanation';
import PhotoOfTheDay from './photoOfDay';


const MiddleContent = props =>  {
    
    return (
        <div className='photo-explan-wrapper'>

            <PhotoOfTheDay dailyImg = {props.apodData} />
            <Explanation imgExplan = {props.apodData} />
        
        
        </div>
    )
}

export default MiddleContent