/* import { Component } from "react";

export default class AddOptions extends Component{
    addUser=(e)=>{
        e.preventDefault()
        const data = e.target.elements.uname.value
        this.props.addusr(data)        
    }
    render(){
        return(
            <div>
               <form onSubmit={this.addUser}>
                   <input type='text' name='uname'/>
                   <button>Call me</button>
                </form> 
                <div id='show'></div>
            </div>
        )
    }
} */
function AddOptions(props){
    const addUser=(e)=>{
        e.defaultPrevent()
        const data=e.target.elements.uname.value
        props.addUser(data)
    }
    return(
        <div>
           <form onSubmit={addUser}>
               <input type='text' name='uname'/>
               <button>Call me</button>
            </form> 
            <div id='show'></div>
        </div>
    )
}
export default AddOptions