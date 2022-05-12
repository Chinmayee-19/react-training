import {useSelector} from "react-redux"
function App() {
  const counter= useSelector((state)=> state.cntr)
  return(
    <div>
      
  <p>The current count is {counter}</p>
    </div>
  )
}
export default App