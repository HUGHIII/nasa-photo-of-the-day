import React from 'react';
import './footer.css';
import { Badge } from 'reactstrap';

const Footer = props => {
    return(
        <div className='footer'>

            <Badge color="warning">
            <p>{props.apodData.copyright}</p>
            <p>{props.apodData.date}</p>
            </Badge>

        </div>
    )
}



export default Footer