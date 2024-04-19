import React from "react";
export const ImgScreen = (props)=>{


    return <>
    <h2> {props.cusstyle}</h2>
    <h1 style={{color :props.cusstyle}}>{props.lbl}</h1>
        <img src={props.src} />
    </>
}