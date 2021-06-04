import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Alert from "./Alert";
import List from "./List2"
import { FaEdit,FaTrash} from "react-icons/fa";
import Card from "./Card2";
import Navbar from "./Navbar2";
import "./Title.css";
const Title=()=>{

const[task,setTask]=useState("");
const[list,setList]=useState([]);
const[isedit,setIsedit]=useState(false);
const[editId,setEditid]=useState(null);
const[alert,setAlert]=useState({show:"false",type:"",msg:""})



const Submit=(e)=>{
e.preventDefault();
if(!task)
{
    ShowAlert(true,"danger","enter any task");
}
else if(task && isedit){
setList(list.map((items)=>{
    if(items.id==editId){
        return{...items,title:task}
    }
    return items;
}))
setTask("");
ShowAlert(true,"success","edited");

setIsedit(false);
setEditid(null);

}

else
{
 const newone={  title:task,
        id:new Date().getTime().toString(),};
    setList([...list,newone]);
    setTask("");
    ShowAlert(true,"success","added")
}
}
const ShowAlert=(show=false, type="" ,msg="")=>{
setAlert({show,type,msg});
}
const Delete=(id)=>{
const deleteitems=list.filter((props)=>props.id!==id);
 setList(deleteitems);
 ShowAlert(true,"danger","deleted")

}
const Edit=(id)=>{
const edited=list.find((props)=>props.id==id);
setTask(edited.title)
setEditid(id);
setIsedit(true);
}
const Clear=()=>{
    setList([]);
}
return(<>
{/* 
{
    alert.show && <Alert {...alert} list={list}
    ShowAlert={ShowAlert}></Alert>
} */}

 <Navbar></Navbar>
<Card Submit={Submit}  isedit={isedit} setTask={setTask} Clear={Clear} task={task}></Card>
{
    alert.show && <Alert {...alert} list={list}
    ShowAlert={ShowAlert}></Alert>
}

<hr></hr>
<h3 className=" my-20 centre">Your Notes</h3>
     <hr></hr>
     <div id="notes" className=" my-30 row container-fluid shree2  ">
          <List list={list} Delete={Delete} Edit={Edit}></List>
      </div>
       </>
       )
       }
       export default Title;