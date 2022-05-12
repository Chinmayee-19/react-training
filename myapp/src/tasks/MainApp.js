
import { useState} from "react";

function MainApp(){
    const[userdata,setUserData] =useState([])
    const[user,setUser] = useState('');

    const[department,setDeptData] = useState([])
    const[dept,setDept] = useState('');

    const addUser= (e)=>{
        e.preventDefault()
        setUserData([
            ...userdata,{user}
        ])
        setUser('')
    }
    const removeUser =(user)=>{
        setUserData(userdata.filter((usr)=>usr.user!== user))
    }
    return(
        <div>
            {userdata.map((usr)=>(
                <div>
                    <h6>{usr.user}</h6>
                    <button onClick={() => removeUser(usr.user)}>DELETE</button>
                </div>
            ))}
            
            <form onSubmit={addUser}>
                User : <input type="text" value={user} onChange={(e)=>setUser(e.target.value)}/>
               <button>ADD</button>
            </form>
            
        </div>
    )
}
export default MainApp;







