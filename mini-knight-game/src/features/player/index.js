import React from "react";
import playerImg from "./playerImg.svg";
import {connect} from "react-redux";

function Player(props){
    return(
        <div
        style={{
            position:"relative",
            top: props.position[1],
            left: props.position[0],
            backgroundImage: `url(${playerImg})`,
            width: "50px",
            height: "50px",
        }}
        />
    )
}

function mapStateToProps(state){
    return{
        ...state.player,
    }
}

export default connect(mapStateToProps)(Player);