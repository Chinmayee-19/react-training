//import { Component } from "react";

/* export default class Option extends Component{
    delUser=()=>{
        this.props.deldata(this.props.mydata)
    }
    render(){
        return(
            <div>
                <div>
                {this.props.mydata}
                <button onClick={this.delUser}>delete</button>
            </div>
            <div>
                {this.props.md}
            </div>  
            </div>   
        )
    }
} */
function Option(props){
    const delUser=()=>{
        props.deldata(props.mydata)
    };
    return(
        <div>
            <div>
            {props.mydata}
            <button onClick={delUser}>delete</button>
        </div>
        <div>
            {props.md}
        </div>  
        </div>   
    )
}
export default Option