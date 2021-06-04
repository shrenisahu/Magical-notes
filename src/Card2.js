const Card=({Submit,setTask,Clear,isedit,task})=>{
    return(
 
        <div class="container my-3">
     <h3>WELCOME TO MY NOTES</h3>
 
 <div class="card" >
     <form onSubmit={Submit}>
         <div class="card-body">
           <h5 class="card-title">Add a Note</h5>
           <div class="form-group">
           <input type="text"  class="form-control"
     value={task}   onChange={(e)=>setTask(e.target.value)}></input>
   
           </div>
           <button class="btn btn-primary" id="addbtn">{isedit?"EDIT" :"ADD"}</button>
          &nbsp;&nbsp;&nbsp;
           <button class="btn btn-primary" onClick={Clear}>CLEAR </button>
         </div>
         </form>
       </div>
        
 </div>
    )
 }
 export default Card;