const {useState}=require('react');
function HooksDemo(props){
    const [count,setState]=useState(props.count)
    return (
        <div>
            <p> the current state is {count}</p>
            <button onClick={()=>setState(count+1)}>Increment</button>
            <button onClick={()=>setState(count-1)}>decrement</button>
            <button onClick={()=>setState(10)}>Reset</button>
        </div>
    )
}
HooksDemo.defaultProps={
    count:0
}
export default HooksDemo