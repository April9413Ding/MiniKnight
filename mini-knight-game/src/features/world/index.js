import React from "react";
import Map from "../map";
import Player from "../player";

const World=(props)=>{
    return(
        <div
        style={{
            position:"relative",
            width:"800px",
            height:"800px",
            margin:"1rem auto",
        }}
        >
            <Map/>
            <Player/>
        </div>
    )
}

export default World;

