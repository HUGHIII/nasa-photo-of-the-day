import React from "react";
import './middleContent.css'




const Explanation = props => {
    return (
        <div className = 'explanationText'>

            <p>{props.imgExplan.explanation}</p>

        </div>
    )
}

export default Explanation