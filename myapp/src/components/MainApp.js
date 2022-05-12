import {Component} from "react"
import Action from "./Action"
import AddOptions from "./AddOptions"
import Footer1 from "./Footer1"
import Header1 from "./Header1"
import Options from "./Options"
import Addoption2 from "./Addoption2"
import Counter from "./Counter"
export default class MainApp extends Component{
    state={
    userdata:['admin','manager','QA'],
    departments:['hr','finance']
    }
    emptyUserArray=()=>{
        this.setState(()=>{
            return{
                userdata:[]
            }
        })
    }
    emptyDepartment=()=>{
        this.setState(()=>{
            return{
                departments:[]
            }
        })
    }
    adddept=(data)=>{
        this.setState((prevState)=>{
            return{
                departments:prevState.departments.concat(data)
            }
        })
    }
    addUser=(data)=>{
        this.setState((prevState)=>{
            return{
                userdata:prevState.userdata.concat(data)
            }
        })
    }
    deleteUser=(data)=>{
        this.setState((prevState)=>{
            return{
            userdata:prevState.userdata.filter((input)=>data!==input)
        }
        })
    }
    render(){
        return(
            <div>
                <Header1 hmessage="Welcome to Header1"/>
                <h3> Welcome to MainApp</h3>
                <AddOptions ad="You can add options" addusr={this.addUser}/>
                <Addoption2 addde={this.adddept}/>
                <Options udata={this.state.userdata} dept={this.state.departments} eu={this.emptyUserArray} ed={this.emptyDepartment}
                du={this.deleteUser}/>
                <Action isData={this.state.userdata.length>0} isDept={this.state.departments.length>0}/>
                <hr/>
                <Footer1 ft="Thanks this is footer"/>
               
            </div>
        )
    }
}