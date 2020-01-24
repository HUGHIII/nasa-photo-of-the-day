import React from 'react';
// import './middleContent.css';
import styled from 'styled-components';


var Textdiv = styled.div `
display:flex;
background-color:lightgrey;
margin:1% 25%;
border-radius:15px

`;

const P = styled.p `
padding: 3%;

`






const Explanation = props => {
    return (

        
        <Textdiv className = 'explanationText'>

            <P>{props.imgExplan.explanation}</P>

        </Textdiv>
       
    )
}

export default Explanation