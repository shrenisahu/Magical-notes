import { useEffect, useState } from "react";
const Alert=({type,msg,ShowAlert,list})=>{



    useEffect(()=>{
 const timeout=  setTimeout(()=>{
     ShowAlert()
 },2000)
 return()=>clearTimeout(timeout)
    },[list])//every time the list changes we clear out time out
return (
     <p className={`alert alert-${type}`}>{msg}</p>)//her two alerst are usde just to give css effect

}
export default Alert;