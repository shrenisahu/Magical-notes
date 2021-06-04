import { useEffect, useState } from "react"
import "./App.css"

import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import {FaEdit,FaTrash} from "react-icons/fa"
const List=({list,Delete,Edit})=>{
    return(
        <>
{list.map((props)=>{
    return(
        <>
    <div className=" noteCard my-2 mx-2 card card text-dark bg-light mb-3" style={{width: "18rem"}}>
    <div className="card-body">
    <h5 key={props.id}>{props.title}</h5>
    <button className="btn btn-outline-primary btn-sm" onClick={()=>Delete(props.id)}><FaTrash/></button>
    &nbsp;&nbsp;
    <button  className="btn btn-outline-primary btn-sm" onClick={()=>Edit(props.id)}><FaEdit/></button> 
</div>
</div> 

        </>
    )
})}
        </>)
}
export default List;