import React from 'react';
import './titleHeader.css';
import { Badge } from 'reactstrap';





const TitleHeader = props => {
    console.log(props)
    return(
        <div className ='Header-Title'>
            <h1 class='display-1'><Badge color="secondary">{props.apodData.title}</Badge></h1>
        </div>
    )
}

export default TitleHeader