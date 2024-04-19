import React from "react";
import Select from "react-select";
import { useState } from "react";
import { ImgScreen } from "./ImgScreen";
const options =[
    {label:"Nature",value:"./logo192.png",color:'red'},
    {label:"Science",value:"./logo512.png",color:'blue'},
    {label:"Environment",value:"Image Environment",color:'green'}
]
export const DropDownList = ()=>{
    const [val,SetValue] = useState(null);
    const [lbl,SetLable] = useState(null);
    const [color,SetColor] = useState(null)
    const ChangeEventHandler = (e)=>{

        console.log(e.value)
        SetValue(e.value)
        SetLable(e.label)
        SetColor(e.color)
    }
    return <>
    <div className="row">
    <div className="col-md-4">
    </div>    
    <div className="col-md-4">
    <h1>SELECT DATA </h1>
    <Select options={options}  
    isSearchable 
    noOptionsMessage={()=>"No Data"}
    onChange={ChangeEventHandler}
    />
    </div>    
    <div className="col-md-4">
       <ImgScreen src={val} lbl={lbl} cusstyle ={color}/>
    </div>    
    </div>
    
    </>
}