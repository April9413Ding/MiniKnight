const initialState ={
    mapObject:[],
    mapWallsV:[],
    mapWallsH:[],
}

const mapReducer = (state=initialState,action)=>{
    switch(action.type){
        case "DRAW_MAP":
            return{
                ...action.payload
            }

        default:
            return state
    }
}

export default mapReducer;