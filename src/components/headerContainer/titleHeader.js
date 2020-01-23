import React from 'react';
import './titleHeader.css';



const TitleHeader = props => {
    console.log(props)
    return(
        <div className ='Header-Title'>
            <h1>{props.apodData.title}</h1>
        </div>
    )
}

export default TitleHeader