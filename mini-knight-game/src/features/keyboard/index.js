import React from "react";

const KeyBoard=(props)=>{

    return(
        <div>
            <div>
            <button style={{backgroundColor:props.btnColor[0]}}>W</button>
            </div>

            <div>
            <button style={{backgroundColor:props.btnColor[1]}}>A</button>
            <button style={{backgroundColor:props.btnColor[2]}}>S</button>
            <button style={{backgroundColor:props.btnColor[3]}}>D</button>
            </div>
        </div>
    )
}


export default KeyBoard;
