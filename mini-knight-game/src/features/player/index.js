import React from "react";
import playerImg from "./playerImg.svg";
import {connect} from "react-redux";
import handleMovement from "./movement";


function Player(props){
    return(
        <div
        style={{
            position:"absolute",
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${playerImg})`,
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            width: "80px",
            height: "80px",
        }}
        />

    )
}

function mapStateToProps(state){
    return{
        ...state.player,
    }
}

export default connect(mapStateToProps)(handleMovement(Player));