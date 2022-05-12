import { Component } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/customer";

export default class RestApp extends Component {

    state={
        users:[]
    }
  componentDidMount() {
    axios.get(API_URL).then(res => res.data) 
    .then((data)=>{ 
        this.setState({users:data})   
        console.log(this.state.users);
        console.log('loading initally');
        
    }) 
  }
  componentDidUpdate(){
      console.log('state is updted');
  }
  render() {
    return (
    <div className='container'>

<div className='col-xs-8'>
    <h1> Users Data</h1>
    {this.state.users.map((user) =>(
        <div className="card">
           <div className="card-body"> 
    <h5 className="card-title">{user.firstName}</h5>
    <h6 className="card-title">{user.email}</h6>
           </div> 
        </div>
    ))}
</div>
    </div>
    )
  }
}
