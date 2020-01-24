import React from "react";
import './middleContent.css';
import Explanation from './explanation';
import PhotoOfTheDay from './photoOfDay';
import styled from 'styled-components';




const CardDiv = styled.div `
background:black
border: white, solid, 1px



`



  

const MiddleContent = props =>  {
    
    return (
        <div className='photo-explan-wrapper'>




        <PhotoOfTheDay dailyImg = {props.apodData} />

       
        <Explanation imgExplan = {props.apodData} />
          
          
     
             </div>
    )
}

export default MiddleContent