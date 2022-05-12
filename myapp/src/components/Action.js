import {Component} from "react"
export default class Action extends Component{
    render(){
        return(
            <div>
                <button disabled={!this.props.isData}>Show data</button>
                <button disabled={!this.props.isDept}>Show Departments</button>
            </div>
        )
    }
}