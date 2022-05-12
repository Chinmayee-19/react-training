import { Component } from "react";

function Addoption2(props) {
   const adddept=(e)=>{
        e.preventDefault()
        const data = e.target.elements.uname1.value
        props.addde(data)        
    }
        return(
            <div>
               <form onSubmit={adddept}>
                   <input type='text' name='uname1'/>
                   <button>Call me</button>
                </form> 
                <div id='show'></div>
            </div>
        )
}
export default Addoption2