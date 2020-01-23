import React from 'react';
import './footer.css';

const Footer = props => {
    return(
        <div className='footer'>
            
            <p>{props.apodData.copyright}</p>
            <p>{props.apodData.date}</p>

        </div>
    )
}



export default Footer