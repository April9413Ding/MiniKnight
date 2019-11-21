const initialState ={
    btnColor:["grey","grey","grey","grey"],
}

const keyBoardReducer = (state=initialState,action)=>{
    switch(action.type){
        case "KEY_DOWN":
            return{
                ...action.payload
            }
        case "KEY_UP":
            return{
                ...action.payload
            }

        default:
            return state
    }
}

export default keyBoardReducer;