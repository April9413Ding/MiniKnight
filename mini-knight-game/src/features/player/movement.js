import store from "../../config/store";

export default function handleMovement(player){

    const getNewPosition=(direction)=>{
        const oldPos = store.getState().player.position;

        switch(direction){
            case "WEST":
                return [oldPos[0]-80,oldPos[1]];
            case "NORTH":
                return [oldPos[0],oldPos[1]-80];
            case "EAST":
                return [oldPos[0]+80,oldPos[1]];
            case "SOUTH":
                return [oldPos[0],oldPos[1]+80];
            

        }
    }

    // const observeBoundaries=(oldPos, newPos)=>{

    // }

    const directionMove=(direction)=>{

        store.dispatch({
            type:"MOVE_PLAYER",
            payload:{
                position: getNewPosition(direction)
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

    window.addEventListener("keydown", (event)=>{
        handleKeyDown(event);
    })

    return player
}