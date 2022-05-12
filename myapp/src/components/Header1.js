//import {Component} from "react"
/* export default class Header1 extends Component{
    render(){
        return(
            <div>
                <h5> {this.props.hmessage}</h5>
            </div>
        )
    }
} */
function Header1(props){
    return (
        <div>
            <h3>{props.hmessage}</h3>
            </div>
    )
}
export default Header1