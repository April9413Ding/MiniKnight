import store from "../../config/store";

export default function handleMovement(player){

    const getNewPosition=(oldPos,direction)=>{
        
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


    const observeBoundaries=(newPos)=>{
        return (newPos[0] >=0 && newPos[0] <= 720) &&
            (newPos[1] >=0 && newPos[1]<=720);
    }

    const observeWallsV=(newPos,direction)=>{
        const wallsV = store.getState().map.mapWallsV;
        const newPosRow = newPos[1]/80;
        const wallsVRow = wallsV[newPosRow];
        const eachWallV = wallsVRow.map((item,id)=>item*80*(id+1));
        const faceLeftWall = eachWallV.filter(item=>newPos[0]-item === -80); 
        const faceRightWall = eachWallV.filter(item=>newPos[0]-item === 0); 

        if(faceLeftWall.length === 1 && direction === "WEST" ){
            return false
        }else if(faceRightWall.length === 1 && direction === "EAST"){
            return false
        }
        else{return true}
    }

    const observeWallsH=(newPos,direction)=>{
        const wallsH = store.getState().map.mapWallsH;
        const newPosCol = newPos[0]/80;
        const wallsHCol = wallsH.map(item=>item[newPosCol]/3);
        const eachWallH = wallsHCol.map((item,id)=>item*80*(id+1));
        const faceUpWall = eachWallH.filter(item=>newPos[1]-item === -80); 
        const faceDownWall = eachWallH.filter(item=>newPos[1]-item === 0); 

        if(faceUpWall.length === 1 && direction === "NORTH" ){
            return false
        }else if(faceDownWall.length === 1 && direction === "SOUTH"){
            return false
        }
        else{return true}
    }

    const directionMove=(newPos)=>{
        
        store.dispatch({
            type:"MOVE_PLAYER",
            payload:{
                position: newPos,
            }
        })
    }

    const attemptMove =(direction)=>{
        const oldPos = store.getState().player.position;
        const newPos = getNewPosition(oldPos,direction)

        if(observeBoundaries(newPos) && 
        observeWallsV(newPos,direction) && observeWallsH(newPos,direction)=== true){
           return directionMove(newPos);
        }else{return directionMove(oldPos);}
    }

    const handleKeyDown=(event)=>{
        switch(event.keyCode){
            case 65:
               return attemptMove("WEST");
            case 87:
                return attemptMove("NORTH");
            case 68:
                return attemptMove("EAST");
            case 83:
                return attemptMove("SOUTH");

        }
    }

    window.addEventListener("keydown", (event)=>{
        handleKeyDown(event);
    })

    return player
}