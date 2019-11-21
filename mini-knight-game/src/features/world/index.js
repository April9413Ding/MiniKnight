import React from "react";
import Map from "../map";
import Player from "../player";
import {mapObject, mapWallsV, mapWallsH} from "../../data/maps/1";
import store from "../../config/store"

const World=(props)=>{
    store.dispatch({type:"DRAW_MAP", payload: {
        mapObject,
        mapWallsV,
        mapWallsH,
    }})


    return(
        <div
        style={{
            position:"relative",
            width:"800px",
            height:"800px",
        }}
        >
            <Map/>
            <Player/>
        </div>
    )
}

export default World;

