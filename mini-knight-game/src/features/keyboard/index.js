import React from "react";
import {connect} from "react-redux";
import store from "../../config/store";

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

function mapStateToProps(state){
    return{
        ...state.keyBoard,
    }
}

export default connect(mapStateToProps)(handleKeyBoard(KeyBoard));

function handleKeyBoard(keyboard){

    const directionMove=(direction)=>{

        const getNewColer = (direction) =>{
            switch(direction){
                case "WEST":
                   return ["grey","blue","grey","grey"];
                case "NORTH":
                    return ["blue","grey","grey","grey"];
                case "EAST":
                    return ["grey","grey","grey","blue"];
                case "SOUTH":
                    return ["grey","grey","blue","grey"];
    
            }
        }
        
        store.dispatch({
            type:"KEY_DOWN",
            payload:{
                btnColor: getNewColer(direction),
            }
        })
    }


    const handleKeyDown=(event)=>{
        switch(event.keyCode){
            case 65:
               return directionMove("WEST");
            case 87:
                return directionMove("NORTH");
            case 68:
                return directionMove("EAST");
            case 83:
                return directionMove("SOUTH");

        }
    }

    const handleKeyUp = (event) =>{
        store.dispatch({
            type:"KEY_UP",
            payload:{
                btnColor: ["grey","grey","grey","grey"],
            }
        })
    }

    window.addEventListener("keydown", (event)=>{
        handleKeyDown(event);
    })

    window.addEventListener("keyup", (event)=>{
        handleKeyUp(event);
    })

    return keyboard
}
