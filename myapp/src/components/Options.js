//import { Component } from "react";
import Option from "./Option";

/* export default class Options extends Component{
    render(){
        return(
            <div>
                {
                    this.props.udata.map((data)=> <Option mydata={data} deldata={this.props.du}/>) 
                }
                {
                    this.props.dept.map((d)=><Option md={d}/>)
                }
                <button onClick={this.props.eu}>Delete Users</button>
                <button onClick={this.props.ed}>Delete Departments</button>
               
            </div>
        )
    }
}
 */
function Options(props) {
    return(
        <div>
            {
                props.udata.map((data)=> <Option mydata={data} deldata={props.du}/>) 
            }
            {
                props.dept.map((d)=><Option md={d}/>)
            }
            <button onClick={props.eu}>Delete Users</button>
            <button onClick={props.ed}>Delete Departments</button>
           
        </div>
    )
}
export default Options