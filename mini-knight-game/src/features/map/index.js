import React from "react";
import {connect} from "react-redux";
import MapFloor from "./MapFloor.svg";
import "./map.css";

const Map=(props)=>{
    return(
        <div
        style={{
            position:"relative",
            backgroundImage:`url(${MapFloor})`,
            backgroundSize: "100%",
            top:"0",left:"0",
            backgroundRepeat:"no-repeat",
            height: "100%",
        }}>

        <div style={{position:"absolute"}}>
        {
            props.mapWallsV.map(row => <WallRowV row={row}/>)
        }
        </div>

        <div style={{position:"absolute", 
        display:"flex", 
        flexDirection:"column",
        justifyContent:"space-evenly",
        height:"800px"}}>
        {
            props.mapWallsH.map(row => <WallRowH row={row}/>)
        }
        </div>

        {
            props.mapObject.map(row => <MapRow row={row}/>)
        }
        </div>
    )
}

const mapStateToProps =(state)=>{
    return{
        mapObject: state.map.mapObject,
        mapWallsV: state.map.mapWallsV,
        mapWallsH: state.map.mapWallsH,
    }
}

export default connect(mapStateToProps)(Map);



const getMapWallImg =(type)=>{
    switch(type){
        case 0:
            return "floor"
        case 1:
            return "wallV"
        case 2:
            return "doorV"
        case 3:
            return "wallH" 
        case 4:
            return "doorH"            
    }

}

const MapAllWallsV=(props)=>{
    return <div className={`wallsV ${getMapWallImg(props.value)}`}></div>
}

const WallRowV=(props)=>{
    return <div className="wallRowV"> {props.row.map(item =><MapAllWallsV value={item}/>)} </div>
}

const MapAllWallsH=(props)=>{
    return <div className={`wallsH ${getMapWallImg(props.value)}`}></div>
}

const WallRowH=(props)=>{
    return <div className="wallRowH"> {props.row.map(item =><MapAllWallsH value={item}/>)} </div>
}

const getMapObjectImg =(type)=>{
    switch(type){
        case 0:
            return "floor"
        case 1:
            return "portal"
        case 2:
            return "key"     
    }

}

const MapAllObject=(props)=>{
    return <div className={`object ${getMapObjectImg(props.value)}`}></div>
}

const MapRow=(props)=>{
    return <div className="objectRow"> {props.row.map(item =><MapAllObject value={item}/>)} </div>
}
