import React from 'react';
import './titleHeader.css';
import { Badge } from 'reactstrap';
import styled from 'styled-components';


const TitleH1 = styled.h1 `
font-size:100px;
height:auto;
@media (max-width:700px){
    font-size:60px;
}

`

const NasaImg = styled.img `
height:10vh;
`



const TitleHeader = props => {
    console.log(props)
    return(

        <div className ='Header-Title'>

        
<TitleH1 class='display-1'><Badge color="secondary"><NasaImg src={props.nasa}/>{props.apodData.title}</Badge></TitleH1>
       
        
     
         </div>
    )
}

export default TitleHeader