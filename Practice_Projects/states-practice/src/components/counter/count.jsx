import { useState } from "react";
function Counter(){
    const [count, setCount] = useState(0);

    function IncCount(){
        setCount(count + 1)
    }

    return(
        <>
        <h3>Count = {count}</h3>

        <button onClick={IncCount}>Press this to Increase counter </button>
        </>
    )

}
export default Counter;