import { Component } from "react";

export default class Counter extends Component{
    state={
        count:10
    } 
    increment=()=>{
        this.setState((prevState)=>{
            return{
                count: prevState.count+1
            }
        })
        alert("Increment is done")
    }
     decrement=()=> {
        this.setState((prevState)=>{
            return{
                count: prevState.count-1
            }
        })
        alert('Decrement is done')
    }
    reset=()=>{
        this.setState((prevState)=>{
            return{
                count: 10
            }
        })
        alert('Reset');
    }
    render(){
        return(
            <div>
                <p>The current count is {this.state.count}</p>
               <button onClick={this.increment}>Increment</button>
               <button onClick={this.decrement}>Decrement</button>
               <button onClick={this.reset}>Reset</button>
            </div>
        )
    }
}

