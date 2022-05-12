import { useState,createContext,useContext } from "react"

const empContext=createContext()
function Contextapp(){
    const [employee,setEmployee]=useState({id:101,name:'admin',location:'bangalore',salary:12345})
    return(
        <div>
            <empContext.Provider value={employee}>
            <Employee/>
            </empContext.Provider>
            
        </div>
    )

}

function Employee(){
    let context=useContext(empContext)
    return(
        <div>
            Welcom to Employee <br></br>
            name:{context.name}
            <br/>
            location:{context.location}
            <Salary/>
        </div>
    )
}


function Salary(){
    let context=useContext(empContext)
    return(
        <div>
            Welcom to Salary <br></br>
            name:{context.name}
            <br/>
            location:{context.salary}
        </div>
    )
}
export default Contextapp